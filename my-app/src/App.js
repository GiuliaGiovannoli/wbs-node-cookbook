import React from "react";
import { Route, NavLink, Switch } from "react-router-dom"

import './App.css';

import RecipePage from "./components/RecipePage";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Spinner from "./components/Spinner";
import RecipeCardsCollection from "./components/RecipeCardsCollection";
import Favorites from "./components/Favorites"

import Logo from "./img/logo3.png"
import { useState, useEffect } from 'react';
import { client } from './client';

function App() {

  const [posts, setPosts] = useState();
  const [categoryResult, setCategoryResult]= useState()
  const [category, setCategory]= useState()
  const [favoritePosts, setFavoritePosts]= useState()
  const [favorite, setFavorite]= useState(false)
   const [slugResult, setSlugResult]= useState()
  const [slug, setSlug]= useState()
  
// filter through post with same id like click event


  const chooseCategory=(e)=>{
        setCategory(e.target.text)
  }

  const addFavorite =(slug)=>{
    console.log(slug) 
    const newObjArr= posts.map((prevPost) => {
          if (prevPost.fields.slug===slug){
            return { ...prevPost,
              favorite: !prevPost.favorite
            } 
          }
        else return prevPost 
      }
      
    )
    setPosts(newObjArr)
  
  }
   
  const chooseSlug=(e)=>{
    console.log(e.target.text)
    setSlug(e.target.text)
}

  useEffect(() => {
    client.getEntries(process.env.REACT_APP_SPACE_ID)
    .then((response)=> 
    {setPosts(response.items.map((post)=>({ ...post, favorite: false})));
    console.log(posts)})
    .catch(console.error)
  }, [])

useEffect(()=> { 
    client.getEntries({
      'content_type': 'blogPost',
      'fields.category' : category
  })
  .then((response) => {setCategoryResult(response.items.map((post)=>({ ...post, favorite: false})))})
  .catch(console.error)
},[category])

useEffect(()=> { 
  client.getEntries({
    'content_type': 'blogPost',
    'fields.slug' : slug
})
.then((response) => {setSlugResult(response.items)})
.catch(console.error)
},[slug])

return (
     <>
     <nav id="four">
      <NavLink ecact to="/"> <img src={Logo}/> </NavLink>
      <NavLink exact to="/" className="link"
      > Home </NavLink>
       <NavLink  exact to="/recipes"  className="link"
      > All Recipes </NavLink>
       <NavLink
        to="/contact"  className="link"
      > Contact</NavLink>
      </nav>
      <Header />
      <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/recipes/RecipePage/:slug" render={(props)=> (slugResult? <RecipePage {...props} posts={slugResult} /> : <Spinner />)}/>
            <Route path="/recipes/RecipePage" component={RecipePage} />
            <Route path="/recipes/Favorites" render={(props) => (posts && posts.filter(post=>post.favorite).length >=1 ?  <RecipeCardsCollection {...props} posts={posts.filter(post=>post.favorite)} addFavorites={addFavorite}/> : <h2 className="container">Please choose some favorites first</h2>)} />
            <Route path="/recipes/:category" render={(props)=> (categoryResult?  <RecipeCardsCollection {...props} onChangeSlug={chooseSlug} posts={categoryResult} addFavorites={addFavorite} /> : <Spinner />)}/>
            <Route path="/recipes" render={(props) => (posts?  <RecipeCardsCollection {...props} posts={posts} onChangeSlug={chooseSlug} addFavorites={addFavorite}/> : <Spinner />)} />
            <Route exact path="/" render={(props) => posts && <Home  {...props} onChangeCategory={chooseCategory} posts={posts} addFavorites={addFavorite} />}/>
       
      </Switch>
      <Favorites />
       <Footer />
  </>
  );
}

export default App;
