import React from 'react'
import styles from './Display.module.css'

function Display({ displayCalVal }) {
  return (
    <input className={styles['display']} type="text" value={displayCalVal} readOnly />
  )
}

export default Display