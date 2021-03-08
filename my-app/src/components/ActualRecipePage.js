import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"

import './comp-styles.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});


export default function ActualRecipePage(props) {

  const classes = useStyles();


  const { slug } = useParams()

  const [slugResult, setSlugResult]= useState()
  const [image, setImage] = useState()

  useEffect(()=>{
    if(slug){
      fetch(`http://localhost:4000/recipes/slug/${slug}`)
      .then(res => res.json())
      .then (data => setSlugResult(data[0]))
      .catch(e => console.log(e.message))
    }
  },[slug])

  useEffect(() => {
    fetch(`http://localhost:4000/${slug}.png`)
    .then(res => setImage(res.url))
  })


  return (
    <div id="recipeGrid">
      <CardActionArea component="a" href="#">
        <Card className={classes.card} id="recipeCard">
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {slug ? slugResult && slugResult.title : props.post.title}
              </Typography>
              <Typography variant="subtitle1" id="recipeText">
              <br></br>
                {slug ? slugResult && slugResult.category : props.post.category}
              </Typography>
              <Typography variant="subtitle1" paragraph id="recipeText">
              <br></br>
              Ingredients:
              {slug ? slugResult && slugResult.ingredients : props.post.ingredients}
              </Typography>
              <Typography variant="subtitle1" id="recipeText">
              Method: 
              <br></br>
              {slug ? slugResult && slugResult.description : props.post.description}
              </Typography>
            </CardContent>
          </div>
            <CardMedia className={classes.cardMedia} image={image} title="" id="pic">
            </CardMedia>
        </Card>
      </CardActionArea>

      
      </div>


  );
}
