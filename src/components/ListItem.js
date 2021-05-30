import React from 'react';

const ListItem = ({todo, id}) => {
  return (
    <div>
      <li>
        <label htmlFor={id}>
          <input type="checkbox" id={id} />
          {todo.name}
        </label>
        <button>Edit</button>
      </li>
    </div>
  );
};

export default ListItem;
