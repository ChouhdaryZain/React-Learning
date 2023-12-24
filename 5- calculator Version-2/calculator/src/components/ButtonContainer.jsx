import React from 'react'
import styles from './ButtonContainer.module.css'

function Button({ buttonNamess, onButtonClick }) {
  return (
    <div className={styles['buttonsContainer']}>
      {buttonNamess.map(buttonName => (
        <button key={buttonName} className={styles['button']} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  )
}

export default Button