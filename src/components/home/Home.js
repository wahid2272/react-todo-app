import React from 'react';
import FormInput from '../form/FormInput';
import List from '../tasks/List';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import {DataContextProvider} from '../context/DataProvider';

// Material UI
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