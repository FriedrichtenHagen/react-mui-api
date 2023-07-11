import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

function App() {


function handleApiCall(){
  fetch("https://www.tagesschau.de/api2/homepage")
    .then(res => {
      console.table(res)
    })


}

  return (
    <>
      <Button variant="contained" onClick={handleApiCall}>Get news</Button>
    </>
  )
}

export default App
