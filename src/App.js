import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    //BEM
    <div className="app">
     

    {/* sidebar*/}
    <Sidebar />

    {/* Feed*/}
    <Feed />
    
    {/* Widgets*/}
    <Widgets/>


    </div>
  );
}

export default App;