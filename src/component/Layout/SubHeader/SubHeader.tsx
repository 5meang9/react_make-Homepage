import React, {useState} from 'react'
import styles from './SubHeader.module.scss'

export default function SubHeader() {


  return(
    <>
      <div className={`${styles.dropdownMenu}` + 'ddd'}>
        <div className={styles.subMenu1}>
          <a href=''>Item 1</a>
          <a href=''>Item 2</a>
          <a href=''>Item 3</a>
        </div>
        <div className={styles.subMenu2}>
          <a href=''>Item 4</a>
          <a href=''>Item 5</a>
          <a href=''>Item 6</a>
        </div>
        <div className={styles.subMenu2}>
          <a href=''>Item 7</a>
          <a href=''>Item 8</a>
          <a href=''>Item 9</a>
        </div>
      </div>
    </>
  )
}
