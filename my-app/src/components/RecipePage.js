import React from 'react';
import { Link, useParams } from "react-router-dom"
import './comp-styles.css';
import ActualRecipePage from './ActualRecipePage';
import RecipeCardsCollection from './RecipeCardsCollection';
import Spinner from './Spinner';


export default function RecipePage({posts}) {

  return (
    <>
          {posts && posts.map((post) => {
            return (
                  <ActualRecipePage key={post.slug} post={post} />
          )})}
</>
  )
}