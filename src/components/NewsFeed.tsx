
import MediaCard from './MediaCard.tsx'
import { useContext } from 'react';
import NewsContext  from './MediaCard.tsx'
export default function NewsFeed({handleApiCall}: any){

    const news = useContext(NewsContext);


    return(
      <div className='news-feed'>
      {
        news.map((item: any, index:number) => {
          return <MediaCard image={item.teaserImage.imageVariants['16x9-256']} topline={item.topline} title={item.title} buttonClickHandler={handleApiCall} key={index} />
        })
      }
      </div>
    )
  
  }