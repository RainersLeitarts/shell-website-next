import React from 'react'
import styles from '../../styles/HomeSection.module.scss'

interface Props {
  dark?: boolean
}

const index: React.FC<Props> = ({dark}) => {
  return (
    <div className={`${styles.container} ${dark && styles.dark}`}>
      <h1>Home Section</h1>
    </div>
  )
}

export default index