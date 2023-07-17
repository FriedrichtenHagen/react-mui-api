
import MediaCard from './MediaCard.tsx'
import { NewsContext } from '../App.tsx'
import { ThemeContext } from '../App.tsx'
import { useContext } from "react";

export default function NewsFeed({handleApiCall}:any){

    const newsCont = useContext(NewsContext)
    const theme = useContext(ThemeContext);

    console.log(theme)


    return(
      <div className='news-feed'>
      {
        newsCont.map((item: any, index:number) => {
          return <MediaCard image={item.teaserImage.imageVariants['16x9-256']} topline={item.topline} title={item.title} buttonClickHandler={handleApiCall} key={index} />
        })
      }
      </div>
    )
  
  }