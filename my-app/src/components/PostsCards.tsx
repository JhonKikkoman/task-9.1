/** @format */

import { useNavigate } from 'react-router-dom';
import { propTPostsCards } from '../models';

export function PostsCards({ propArr, propClbk }: propTPostsCards) {
  const navigate = useNavigate();
  const hanlderClick = (id: number) => {
    propClbk(id);
    navigate(`/posts/${id}`, { replace: true });
  };
  return (
    <>
      {propArr.map((o) => {
        return (
          <div key={o.id} className='card' onClick={() => hanlderClick(o.id)}>
            <span className='card__date'>{o.date}</span>
            <p className='card__content'>{o.content}</p>
          </div>
        );
      })}
    </>
  );
}
