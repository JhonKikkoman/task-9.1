/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateEditForm } from './Create-EditForm';
import { propTCreatePost } from '../models';

export function CreatePost({ funcClbk }: propTCreatePost) {
  const [state, setState] = useState('');
  const navigate = useNavigate();

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    funcClbk(state);
    navigate('/', { replace: true });
  };

  const handlerChange = ({ target }: any) => {
    const { value } = target;
    setState(value);
  };
  return (
    <CreateEditForm
      handlerSub={handlerSubmit}
      handlerChange={handlerChange}
      linkTo='/'
      value={state}
      content='Опубликовать'
    />
  );
}
