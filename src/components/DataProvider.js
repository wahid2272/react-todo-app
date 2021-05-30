import React, {useState} from 'react';
//import DataContext from './DataContext';
const DataContext = React.createContext();

const DataContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
};

export {DataContextProvider, DataContext};
