/** @format */

import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { PostsCards } from './components/PostsCards';
import { CreatePost } from './components/CreatePost';
import { Publicate } from './components/Publicate';
import { Card } from './components/Card';
import { CardEdit } from './components/CardEdit';
import { stateTApp } from './models';

function App() {
  const [state, setState] = useState<stateTApp[]>([]);
  const [stateCard, setStateCard] = useState<{
    id: number;
    arr: stateTApp[];
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:7070/posts');
      const result = await response.json();
      setState(result);
    })();
  }, []);

  const ClbkCreatePost = (str: string) => {
    (async () => {
      await fetch('http://localhost:7070/posts', {
        method: 'POST',
        body: JSON.stringify({ id: 0, content: str }),
      });
      const response = await fetch('http://localhost:7070/posts');
      const result = await response.json();
      setState(result);
    })();
  };

  const ClbkPostsCards = (id: number) => {
    const element = state.filter((e) => e.id === id);
    setStateCard({
      id: id,
      arr: element,
    });
  };

  const ClbkCard = (id: number) => {
    const filterArrById = state.filter((i) => i.id !== id);
    setState(filterArrById);
    navigate('/', { replace: true });
    (async () => {
      await fetch(`http://localhost:7070/posts/${id}`, {
        method: 'DELETE',
      });
    })();
  };

  const ClbkCardEdit = (str: string) => {
    const result = state.map((e) => {
      if (stateCard !== undefined && e.id === stateCard.id) {
        e.content = str;
      }
      return e;
    });
    setState(result);
    navigate(`/posts/${stateCard?.id}`);
    const fch = async () => {
      await fetch('http://localhost:7070/posts', {
        method: 'POST',
        body: JSON.stringify({ id: stateCard?.id, content: str }),
      });
    };
    fch();
  };

  return (
    <div className='container__main'>
      <Publicate />
      <div className='container__posts'>
        <Routes>
          <Route
            path='/'
            element={<PostsCards propArr={state} propClbk={ClbkPostsCards} />}
          />
          <Route
            path='/posts/new'
            element={<CreatePost funcClbk={ClbkCreatePost} />}
          />
          <Route
            path={`/posts/${stateCard?.id}`}
            element={<Card propObj={stateCard} propClbk={ClbkCard} />}
          />
          <Route
            path='/post/edit'
            element={<CardEdit propClbk={ClbkCardEdit} id={stateCard?.id} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
