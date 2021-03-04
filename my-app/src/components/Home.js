import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"

import RecipeCard from "./RecipeCard"
import Box from '@material-ui/core/Box';
import './comp-styles.css';


export default (props, {onChangeSlug})=>{

    const [randomNum, setRandomNum]= useState(0)
    
    useEffect(()=> setRandomNum(Math.floor(Math.random() * (props.posts.length))),[])


    return(

    <>
    <div className="home">
        <div className="container">
        <h2>Welcome to Artist Cucina</h2>
        <h3>Do you love colors? Do you love eating?</h3>
        <p>PERFECT! -Stroll around our website and find the perfect color palette for your plate!You can choose different options depending on your diet restrictions.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="container" id="categories">
        <h2>OurCategories</h2>
        <div className="categories">
        <Link to="/recipes/low_sugar" className="link" onClick={props.onChangeCategory} addFavorites={props.addFavorites}>Low Sugar</Link>
        <Link to="/recipes/gluten_free" className="link" onClick={props.onChangeCategory}>Gluten Free</Link>
        <Link to="/recipes/vegan" className="link" onClick={props.onChangeCategory}>Vegan</Link>
        <Link to="/recipes/lacto_free" className="link" onClick={props.onChangeCategory}>Lacto Free</Link>
        <Link to="/recipes/pescatarian" className="link" onClick={props.onChangeCategory}>Pescatarian </Link>
        <Link to="/recipes/vegetarian" className="link" onClick={props.onChangeCategory} >Vegetarian</Link>
        </div>
    </div>

    <div className="container">
        <h2>Dish of the Day</h2>
        <div className="day-dish">
        <Box display="flex" justifyContent="center" bgcolor="background.paper">
        <RecipeCard post={props.posts[randomNum]} addFavorites={props.addFavorites} onChangeSlug={onChangeSlug}/>
        </Box>
        </div>
        
    </div>
    </div>
    </>
    )
}