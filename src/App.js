import React from 'react'
import mikasa from './assets/mikasa.png'
import styles from './style.css'
const App = ({ title }) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
    <img src={mikasa} alt='Mikasa sprite' />
  </div>
)

export default App
