import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsItem = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {props.imagesrc || "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component="a" href={props.link} target="_blank">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default NewsItem