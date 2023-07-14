import { useEffect, useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppBar from './components/AppBar.tsx'
import NewsFeed from './components/NewsFeed.tsx'

// import image from './test.jpg'

export default function App() {
  const [news, setNews] = useState([])
  const [articleDetails, setArticleDetails] = useState([])

  function handleApiCall(url: string){
    fetch(url, {
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
    handleApiCall('https://www.tagesschau.de/api2/homepage/')
  }, [])

  return (
    <>
      <AppBar/>
      <NewsFeed news={news} />
    </>
  )
}



