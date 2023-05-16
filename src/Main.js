import React, { useState } from 'react';

import { Router, Link, useNavigate } from 'react-router-dom';


function Main () {

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  const handleClick = () => {

  };


	return (
    
    <header className="App-header">
        <div className="App-logo">
          <button><span className="one_piece_inner"></span></button>
          <button className={'one_piece'+(isHovering1 ? ' active' : '')}
          onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1}>

              <Link to="./Intro">
                <span className="one_piece_inner">intro</span>
              </Link>

          </button>
          <button className={'one_piece'+(isHovering2 ? ' active' : '')}
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}>

              <Link to="./project">
                <span className="one_piece_inner">project</span>
              </Link>
          </button>
          <button className={'one_piece'+(isHovering3 ? ' active' : '')}
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}>

              <Link to="./todoList">
                <span className="one_piece_inner">todoList</span>
              </Link>
          </button>
          <button className="one_piece"><span className="one_piece_inner"></span></button>
          <button className="one_piece"><span className="one_piece_inner"></span></button>
          <button className="one_piece"><span className="one_piece_inner"></span></button>
        </div>
      </header>

  );
};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default Main;
