import React from 'react';
import FormInput from '../form/FormInput';
import List from '../tasks/List';
import Footer from '../footer/Footer';
import {DataContextProvider} from '../context/DataProvider';

function Home() {
  return (
    <div>
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

export default Home;
