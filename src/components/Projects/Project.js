import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Project(props) {
    const { title, image, githubLink, deployedLink, description } = props;
    return (
        <Card sx={{ maxWidth: 500 }} className="custom-card">
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={require(`../../assets/projects/${image}`)}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={deployedLink} target='_blank'>live site</Button>
                <Button size="small" href={githubLink} target='_blank'>Github Link</Button>
            </CardActions>
        </Card>
    )
}