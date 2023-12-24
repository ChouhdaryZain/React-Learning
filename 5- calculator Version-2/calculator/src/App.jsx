import React from 'react'
import styles from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonContainer'
import { useState } from 'react'

function App() {
  const [calVal, setCalVal] = useState("");
  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };
  return (
    <div className={styles['calculator']}>
      <Display displayCalVal={calVal} />
      <ButtonsContainer buttonNamess={buttonNames} onButtonClick={onButtonClick} />
    </div>
  )
}

export default App