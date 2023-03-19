import React from 'react'
import Registration from '../../Components/Registration/Registration'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.MainHomeContainer} >
        <Registration />
    </div>
  )
}

export default Home
