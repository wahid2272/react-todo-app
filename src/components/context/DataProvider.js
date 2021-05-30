import React, {useState, useEffect} from 'react';
//import DataContext from './DataContext';
const DataContext = React.createContext();

const DataContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    const todoStore = JSON.parse(localStorage.getItem('todoStore'))
    if(todoStore) setTodos(todoStore)
  }, [])
  
  useEffect(() =>{
      localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])


  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};

export {DataContextProvider, DataContext};
