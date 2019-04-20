import React from 'react'
import styles from './Answers.module.css'

//key 프롭을 안주면 변경시 원래있던 데이터도 새로만들어야함. 배열요소를 렌더링할때 최상의 루트요소에게 유일하게 부여되는 값, prop과 좀 다름
const Answers = ({answers, selectAnswer}) => {
    return (
        <ul className={styles.answers}>
           {answers.map(answer =>(
               <li key={answer.key} className={styles.answer} style={{backgroundColor: answer.color}} >
                   <button 
                    type="button" 
                    className={styles.button} 
                    onClick={selectAnswer}
                    name={answer.key}
                   />
               </li>
           ))}
        </ul>
    );
};

export default Answers