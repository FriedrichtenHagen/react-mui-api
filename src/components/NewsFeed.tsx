
import MediaCard from './MediaCard.tsx'
import { NewsContext } from '../App.tsx'
import { ThemeContext } from '../App.tsx'
import { useContext, useState } from "react";
import ArticleDetails from './ArticleDetails.tsx'

export default function NewsFeed({handleApiCall}:any){
    const [articleView, setArticleView] = useState(false)
    const [articleData, setArticleData] = useState()
    const newsCont = useContext(NewsContext)
    const theme = useContext(ThemeContext);

    console.log(theme)

    function toggleArticleView(){
        setArticleView(!articleView)
    }
    function handleArticleViewChange(url:string){
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(response => response.json())
                .then(data => {
                    setArticleData(data)
                    console.log(data)
                    toggleArticleView()
                })
    }

    if(articleView){

        

        return(
            <div className='news-feed'>
            <ArticleDetails articleData={articleData}/>
            </div>
        )
    }else{
        return(
            <div className='news-feed'>
            {
              newsCont.map((item: any, index:number) => {
                return <MediaCard image={item.teaserImage.imageVariants['16x9-256']} topline={item.topline} title={item.title} buttonClickHandler={handleArticleViewChange} url={item.details} key={index} />
              })
            }
            </div>
          )
    }

  
  }