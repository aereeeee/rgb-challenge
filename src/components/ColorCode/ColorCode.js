import React from 'react'
import styles from './ColorCode.module.css'
import Answers from '../Answers';

const ColorCode = ({answer}) => (
    <div className={styles.wrapper}>{answer.color}</div>
)


export default ColorCode