export default function ArticleDetails({articleData}:any){
   
   
    return(
        <>
            <img src={articleData.teaserImage.imageVariants["16x9-512"]}></img>
            <h1>{articleData.title}</h1>
            <p>
            {articleData.firstSentence}

            </p>

        
        </>
    )
}