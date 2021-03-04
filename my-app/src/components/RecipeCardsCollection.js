import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { positions } from '@material-ui/system';
import RecipeCard from "./RecipeCard";
import './comp-styles.css';
import { getThemeProps } from '@material-ui/styles';


export default function RecipeCardsCollection({posts, onChangeSlug, addFavorites, ...props}) {
    
    return (

        <Box m={1} p={1} id="collection">
          {posts && posts.map((post) => {console.log(post)
           return (<Box p={1} id="card">
                  <RecipeCard  key={post.slug} post={post} onChangeSlug={onChangeSlug} addFavorites={addFavorites}/>
            </Box> )})}
            </Box>

    )
}




