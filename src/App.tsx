import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import MediaCard from './components/MediaCard.js'
import image from './test.jpg'

function App() {
  const [news, setNews] = useState([])

  function handleApiCall(){
    fetch("https://www.tagesschau.de/api2/news/?regions=1&ressort=ausland", {
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

  return (
    <>
      <Button variant="contained" onClick={handleApiCall}>Get news</Button>

      <ul>
      {
        news.map((item: any) => {
          return <MediaCard image={image} topline={item.topline} title={item.title} />
        })
      }
      </ul>
    </>
  )
}


export default App
