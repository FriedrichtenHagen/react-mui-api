import { useEffect, useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import AppBar from './components/AppBar.tsx'
import NewsFeed from './components/NewsFeed.tsx'
import { createContext } from 'react';
 
type NewsContextType = string[]
export const NewsContext = createContext<NewsContextType>([]);

type ThemeContextType = "light" | "dark";
export const ThemeContext = createContext<ThemeContextType>("light");


export function App() {
  const [news, setNews] = useState<string[]>([])
  const [theme, setTheme] = useState<ThemeContextType>("light");

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
      <ThemeContext.Provider value={theme}>
        <NewsContext.Provider value={news}>
          <AppBar/>
          <NewsFeed handleApiCall={handleApiCall}/>
        </NewsContext.Provider>
      </ThemeContext.Provider>

    </>
  )
}



