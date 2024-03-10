import styles from './page.module.css'

import Start from '@/component/home/Start'
import NewCard from '@/component/news/NewsCard'

const myArray = [1, 2, 3];

export default function Home() {
  return (
    <div className={styles.main}>
      <div id="home">
        <Start />
        <div className={styles.newsView}>
          <h1 className={styles.newsStartTitles}>Recommended</h1>
          <div className={styles.newsContainer}>
            {myArray.map((item, index) => (
              <NewCard
              id = {index}
              image="path-to-your-image.jpg"
              title="November Prediction by Experts"
              description="An analysis of market trends and predictions."
              date="10 November 2023"
              />
            ))}
          </div>
            
          <h1>New Content</h1>
          <div className={styles.newsContainer}>
            {myArray.map((item, index) => (
              <NewCard
              id = {index}
              image="path-to-your-image.jpg"
              title="November Prediction by Experts"
              description="An analysis of market trends and predictions."
              date="10 November 2023"
              />
            ))}
          </div>
            
          <h1>News</h1>
          <div className={styles.newsContainer}>
            {myArray.map((item, index) => (
              <NewCard
              id = {index}
              image="path-to-your-image.jpg"
              title="November Prediction by Experts"
              description="An analysis of market trends and predictions."
              date="10 November 2023"
              />
            ))}
          </div>
        </div>
          
    </div>
    </div>
  )
}
