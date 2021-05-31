import React, {useContext, useState} from 'react';
import {DataContext} from '../context/DataProvider'

// Material UI
import Button from '@material-ui/core/Button';


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
          <Button
          size="small"
          type="submit"
          variant="contained"
          id="delete" 
          onClick={handleDelete}
        >
          Remove Completed Task
        </Button>
        </div>
    </div>
  );
};

export default Footer;
