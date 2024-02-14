import Image from 'next/image'
import styles from './page.module.css'
import MainNavbar from '@/component/main/MainNavbar'
import Footer from '@/component/main/Footer'
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Home() {
  return (
    <div className={styles.main}>
      <MainNavbar />
      <Footer />
    </div>
  )
}
