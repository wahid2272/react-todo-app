import React, {useState} from 'react';

const ListItem = ({todo, id, checkCompleteStatus, handleEditTodos}) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name)

  const handleEdit = () => {
    setEdit(true);
  }

  const handleConfirm = id => {
    setEdit(false);
    if(editValue){
      handleEditTodos(editValue,id)
    }else{
        setEditValue(todo.name)
    }
  }

  if(edit) {
    return (
      <div>
        <li>
          <input type="text" id={editValue} value={editValue} name={editValue} onChange={e => setEditValue(e.target.value)}/>
          <button onClick={() => handleConfirm(id)}>Confirm</button>
        </li>
      </div>
    );
  }
  else {
    return (
      <div>
        <li>
          <label htmlFor={id} className={todo.complete ? "active" : ""} >
            <input type="checkbox" id={id} checked={todo.complete} onChange={() => checkCompleteStatus(id)} />
            {todo.name}
          </label>
          <button disabled={todo.complete} onClick={handleEdit} >Edit</button>
        </li>
      </div>
    );
  }
};

export default ListItem;
