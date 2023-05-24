import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import Header from './Header';
import Main from './Main';
import Intro from './Intro';
import Project from './Project';
import TodoList from './TodoList';

function App() {

  const location = useLocation();

  return (
    <div className="App">

      <Header/>

      <TransitionGroup className="transitions-wrapper">
        <CSSTransition key={location.pathname} timeout={300} className="slide">
       
          <Routes location={location}>

          <Route path="/" element={<Main />} className="item"></Route>
          <Route path="Intro" element={<Intro />}></Route>
          <Route path="Project" element={<Project />}></Route>
          <Route path="TodoList" element={<TodoList />}></Route>

          </Routes>
          
        </CSSTransition>
      </TransitionGroup>
    
     
    </div>
  );
}

export default App;
