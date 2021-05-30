import React from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';
import {DataContextProvider} from './components/DataProvider';

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
