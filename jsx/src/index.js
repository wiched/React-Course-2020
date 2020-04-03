import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <label htmlFor="name" className="label">Enter name:</label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)