import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div style={{marginTop: 'var(--nav-height)'}}></div>
      <HomeSection />
      <HomeSection dark={true}/>
      <HomeSection />
      <HomeSection dark={true}/>
      <HomeSection />
    </div>
  )
}

export default Home
