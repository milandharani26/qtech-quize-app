import React from "react";
import styles from './Main.module.css'

function Option({option, setSelectedAnswer}) {
  return (
    <div className={styles.optionItem}>
      <input type="radio" name="option" value={option} onChange={(e)=>setSelectedAnswer(e.target.value)}/>
      <label htmlFor="">{option}</label>
    </div>
  );
}

export default Option;
