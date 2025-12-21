import React from 'react'

export const App = () => {
  return (
    <div>Hello World.... man</div>
  )
}

// Attach component to window
window.MyReactComponents = window.MyReactComponents || {};
window.MyReactComponents.App = App;

export default App;