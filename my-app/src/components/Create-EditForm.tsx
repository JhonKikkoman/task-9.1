/** @format */

import { NavLink } from 'react-router-dom';

interface propT {
  handlerSub: (e: any) => void;
  handlerChange: (e: any) => void;
  linkTo: string;
  value: string;
  content: string;
}

export function CreateEditForm({
  handlerSub,
  handlerChange,
  linkTo,
  value,
  content,
}: propT) {
  return (
    <form action='' onSubmit={handlerSub}>
      <NavLink to={linkTo} className={'btn btn__go-back'}>
        X
      </NavLink>
      <textarea
        name=''
        className='input__field'
        value={value}
        onChange={handlerChange}
      ></textarea>
      <button type='submit' className='btn'>
        {content}
      </button>
    </form>
  );
}
