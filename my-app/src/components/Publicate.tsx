/** @format */

import { NavLink } from 'react-router-dom';

export function Publicate() {
  return (
    <div className='btn__post-new'>
      <NavLink to='/posts/new'>Создать пост</NavLink>
    </div>
  );
}
