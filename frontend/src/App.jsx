import React from 'react'
import Provider from './Provider';
import './App.scss';

export const App = () => {
  const state=React.useRef({count:0});
  return (
    <>
    <div className="hello">Hello Nikhil World!!</div>
    <h1>{state.current.count}</h1>
    <h2>sjhgdjk</h2>
    <h3>fdf</h3>
    <Provider/>
    </>
  )
}


export default App;