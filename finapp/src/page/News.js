import Image from 'next/image'
import NewsHighlight from '@/component/news/NewsHighlight'
import NewCard from '@/component/news/NewsCard'

export default function News() {
  return (
    <div id="home">
        <h1>News</h1>
        <p>See some up-to-date news</p>
        <NewsHighlight 
        imageSrc= 'path-to-your-news-image.jpg' // Replace with the actual path to your news image
        title= 'Market Volatility Reaches New Highs'
        date= '10 November 2024'
        description= 'Franc Daily NEWS'
        summary= 'The market experienced significant volatility this week, with a sharp decline in tech stocks leading the way.'
        keyTakeaway= 'Investors are advised to maintain a diversified portfolio during times of uncertainty.'
      />
      <NewCard 
        image="path-to-your-image.jpg" // Replace with image path
        title="November Prediction by Experts"
        description="An analysis of market trends and predictions."
        date="10 November 2023"
      />
    </div>
  )
}