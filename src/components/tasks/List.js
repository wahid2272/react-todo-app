import React, {useContext} from 'react';
import ListItem from './ListItem';
import {DataContext} from '../context/DataProvider';

const List = () => {
  const [todos, setTodos] = useContext(DataContext);
  
  const changeStatus = id => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) =>{
        if(index === id){
            todo.complete = !todo.complete
        }
    })
    setTodos(newTodos);
  };

  const handleEditTodos = (editvalue, id) =>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index) =>{
        if(index === id){
            todo.name = editvalue
        }
    })
    setTodos(newTodos)
  }

  return (
    <div>
      <ul>
        {
          todos.map((todo, index) => (
            <ListItem todo={todo} key={index} id={index} checkCompleteStatus={changeStatus} handleEditTodos={handleEditTodos} />
          ))
        }    
      </ul>
    </div>
  );
};

export default List;
