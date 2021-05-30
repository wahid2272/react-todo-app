import React from 'react';
import FormInput from './components/form/FormInput';
import List from './components/tasks/List';
import Footer from './components/footer/Footer';
import {DataContextProvider} from './components/context/DataProvider';

function App() {
  return (
    <DataContextProvider>
      <div className="ToDo-App">
        <h1>To Do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataContextProvider>
  );
}

export default App;
