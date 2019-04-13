import React from 'react'
import styles from './Game.module.css'
import Score from '../Score'


const Game = () => (
  <div className={styles.wrapper}> 
    <Score />
  </div>
)

export default Game