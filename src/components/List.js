import React, {useContext} from 'react';
import ListItem from './ListItem';
import {DataContext} from './context/DataContext';

const List = () => {
  const [todos, setTodos] = useContext(DataContext);
  console.log(todos);
  return (
    <div>
      <ul>
        {
          todos.map((todo, index) => (
            <ListItem todo={todo} key={index} id={index} />
          ))
        }    
      </ul>
    </div>
  );
};

export default List;
