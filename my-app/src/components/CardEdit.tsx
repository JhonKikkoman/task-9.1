/** @format */

import { useState } from 'react';
import { CreateEditForm } from './Create-EditForm';
import { propTCardEdit } from '../models';

export function CardEdit({ propClbk, id }: propTCardEdit) {
  const [state, setState] = useState('');

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    propClbk(state);
  };

  const handlerChange = ({ target }: any) => {
    const { value } = target;
    setState(value);
  };
  return (
    <CreateEditForm
      handlerSub={handlerSubmit}
      handlerChange={handlerChange}
      linkTo={`/posts/${id}`}
      value={state}
      content='Сохранить'
    />
  );
}
