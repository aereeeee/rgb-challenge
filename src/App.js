import React, { Component } from 'react'
import styles from './App.module.css'
import { Game, Heading } from './components'

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Heading />
        <Game />
      </div>
    )
  }
}

export default App
