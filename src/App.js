import React from 'react'
import mikasa from './assets/images/mikasa.png'

const App = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <img src={mikasa} alt='Mikasa sprite' />
  </div>
)

export default App
