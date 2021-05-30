import React from 'react';
import FormInput from './components/form/FormInput';
import List from './components/tasks/List';
import Footer from './components/footer/Footer';
import {DataContextProvider} from './components/context/DataProvider';

// Material UI
import Header from './components/header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div>
      <CssBaseline />
      <Header/>
      <DataContextProvider>
        <div className="ToDo-App">
          <h1>To Do List</h1>
          <FormInput />
          <List />
          <Footer />
        </div>
      </DataContextProvider>
    </div>
  );
}

export default App;
