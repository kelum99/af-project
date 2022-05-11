import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
