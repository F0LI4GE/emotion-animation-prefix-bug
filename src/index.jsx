import React from 'react';
import ReactDOM from 'react-dom';
import styled from "@emotion/styled";
import {keyframes} from "@emotion/core";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0, 0, 0);
  }
 
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
 
  70% {
    transform: translate3d(0, -15px, 0);
  }
 
  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Animation = styled.div`
  box-sizing: border-box;
  width: 200px;
  height: 100px;
  
  background-color: aliceblue;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 100px auto 0 auto;
  
  animation: ${bounce} 1s ease infinite;
`

const App = () => (
  <Animation><div>Hello</div></Animation>
);


ReactDOM.render(<App />, document.getElementById('app'));
