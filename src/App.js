import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import DateContextProvider from './components/useDate/useDate';


function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <Home></Home>
      </DateContextProvider>
    </div>
  );
}

export default App;
