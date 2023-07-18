
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type MediaProps = {image: any, firstSentence: string, title: string, buttonClickHandler: any, url: string}

export default function MediaCard({image, firstSentence, title, buttonClickHandler, url}: MediaProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }} className='card-margin'>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firstSentence}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=> buttonClickHandler(url)} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}