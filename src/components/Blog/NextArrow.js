import React from 'react'
import styles from './Arrow.module.css'

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className={`${styles.arrow} ${styles.nextArrow}`}
      onClick={onClick}>
    </div>
  )
}

export default NextArrow
