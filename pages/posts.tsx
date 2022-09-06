import React from 'react'
import styles from '../styles/Posts.module.scss'
import Navbar from '../components/Navbar'
import PostsBanner from '../components/PostsBanner'

const posts = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <PostsBanner />
        </div>
    )
}

export default posts