import React from 'react';

const ListItem = ({todo, id, checkCompleteStatus}) => {
  return (
    <div>
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""} >
          <input type="checkbox" id={id} checked={todo.complete} onChange={() => checkCompleteStatus(id)} />
          {todo.name}
        </label>
        <button disabled={todo.complete}>Edit</button>
      </li>
    </div>
  );
};

export default ListItem;
