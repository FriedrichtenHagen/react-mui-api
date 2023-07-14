
import MediaCard from './MediaCard.tsx'

export default function NewsFeed({news}:any){
    return(
      <div className='news-feed'>
      {
        news.map((item: any, index:number) => {
          return <MediaCard key={index} image={item.teaserImage.imageVariants['16x9-256']} topline={item.topline} title={item.title} />
        })
      }
      </div>
    )
  
  }