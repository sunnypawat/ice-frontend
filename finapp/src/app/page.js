import Image from 'next/image'
import styles from './page.module.css'
import MainNavbar from '@/component/main/MainNavbar'
import Footer from '@/component/main/Footer'
import NewsHighlight from '@/component/news/NewsHighlight'
import NewCard from '@/component/news/NewsCard'
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <Footer />
    </div>
  )
}
