import { useEffect, useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MediaCard from './components/MediaCard.tsx'
import AppBar from './components/AppBar.tsx'
// import image from './test.jpg'

export default function App() {
  const [news, setNews] = useState([])

  function handleApiCall(){
    fetch("https://www.tagesschau.de/api2/homepage", {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      }
    })
    .then(response => response.json())
      .then(data => {
        setNews(data.news)
        console.log(data.news)
      })
  }
  useEffect(()=>{
    handleApiCall()
  }, [])

  return (
    <>
      <AppBar/>
      <div className='news-feed'>
      {
        news.map((item: any, index:number) => {
          return <MediaCard key={index} image={item.teaserImage.imageVariants['16x9-384']} topline={item.topline} title={item.content[0].value} />
        })
      }
      </div>
    </>
  )
}


// function NewsFeed(){
//   return(
//     <div className='news-feed'>
//     {
//       news.map((item: any, index:number) => {
//         return <MediaCard key={index} image={item.teaserImage.imageVariants['16x9-256']} topline={item.topline} title={item.title} />
//       })
//     }
//     </div>
//   )

// }


