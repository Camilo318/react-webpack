import React from 'react'
import styles from './style.css'

const App = ({ title }) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
  </div>
)

export default App
