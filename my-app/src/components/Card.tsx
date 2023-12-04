/** @format */

import { useNavigate } from 'react-router-dom';
import { propTCard } from '../models';

export function Card({ propObj, propClbk }: propTCard) {
  const navigate = useNavigate();
  const [obj]: any = propObj?.arr;
  const handlerClickDelete = () => {
    if (propObj?.id !== undefined) {
      propClbk(propObj.id);
    }
  };
  const handlerChangeEdit = () => {
    navigate('/post/edit', { replace: true });
  };
  return (
    <div className='container__card'>
      <span className='hint__created'>{obj.created}</span>
      <p className='content__card'>{obj.content}</p>
      <div className='container__btn'>
        <button
          type='button'
          className='btn__delete'
          onClick={() => handlerClickDelete()}
        >
          Удалить
        </button>
        <button
          type='button'
          className='btn__change'
          onClick={() => handlerChangeEdit()}
        >
          Изменить
        </button>
      </div>
    </div>
  );
}
