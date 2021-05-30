import React, {useContext, useState} from 'react';
import {DataContext} from '../context/DataProvider'


const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos,setTodos] = useContext(DataContext);

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
        todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const handleDelete = () =>{
    const newTodos = todos.filter(todo => {
      return todo.complete === false;
    })

    setTodos(newTodos)
    setCheckAll(false)
  }

  return (
    <div>
      <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll} />
            Mark All Complete
          </label>
          <button id="delete" onClick={handleDelete}>Remove Completed Task</button>
        </div>
    </div>
  );
};

export default Footer;
