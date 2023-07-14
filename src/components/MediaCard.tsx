
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type MediaProps = {image: any, topline: string, title: string, buttonClickHandler: Function}

export default function MediaCard({image, topline, title, buttonClickHandler}: MediaProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }} className='card-margin'>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {topline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={buttonClickHandler} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}