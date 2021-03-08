import React, {useState, useEffect} from 'react';
import { Route, NavLink, Switch, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './comp-styles.css';
import RecipePage from './RecipePage';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));


function RecipeCard(props) {
  console.log(props.addFavorites)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [favorite, setFavorite]= useState(false)
  const changeColor=()=>{
   setFavorite(!favorite)
   }

   const [image, setImage] = useState()
   useEffect(() => {
    fetch(`http://localhost:4000/${props.post.slug}.png`)
    .then(res => setImage(res.url))
  })


  return (
    <Card className={classes.root} id="recipe" key={props.post.slug}>
      <CardHeader id="recipeTitle"
        title={props.post.title}
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image={image}
        title=""
      />
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
          <p>By {props.post.author}</p>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" id="recipeText">
          <p>{props.post.category}</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={()=>props.addFavorites(props.post.slug)} className={props.post.favorite? "heart": ""} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          <div className="slug">
          <Link className="link" to={`/recipes/RecipePage/${props.post.slug}`} onClick={props.onChangeSlug}>
          {props.post.slug}
          </Link>
          </div>
          
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeCard;