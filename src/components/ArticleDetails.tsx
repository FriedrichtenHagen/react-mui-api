export default function ArticleDetails({articleData}:any){
   
   
    return(
        <>
            <img className="article-image" src={articleData.teaserImage.imageVariants["16x9-512"]}></img>
            <h1>{articleData.title}</h1>
            <p>
            {articleData.firstSentence}

            </p>
            <div className="articleText">
                {articleData.content.map((cont:any, index:number) => {
                    if(cont.type === 'text'){
                        return(
                            <p key={index}>{cont.value}</p>
                        )
                    } else if(cont.type === 'box'){
                        return(
                            <img className="article-image" key={index} src={cont.box.image.imageVariants['1x1-640']}></img>
                        )
                    }
                })}
            </div>
        
        </>
    )
}