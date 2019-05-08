import React from 'react'
import styles from './Arrow.module.css'

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className={`${styles.arrow} ${styles.prevArrow}`}
      onClick={onClick}>
    </div>
  )
}

export default PrevArrow
