import {NavLink} from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
function Card({ id, name,species,gender,image,onClose, addFav, removeFav , myFavorites}) {

const [isFav,setIsFav] =useState (false);

const handleFavorite = () =>{
   if(isFav){
      setIsFav(false);
      removeFav(id);
   }
   else {
      setIsFav(true);
      addFav({id, name,species,gender,image, onClose})

   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div>
        
  

         <NavLink to={`/detail/${id}`}>
         <h2>{name}</h2>
         </NavLink>

         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt='' /> 
      <br></br>
      <button onClick={handleFavorite}>{isFav ? '❤️' :'🤍'}</button>
       <button onClick={() =>{onClose(id)}}>X</button>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav : (character) => {dispatch(addFav(character))},
      removeFav : (id) => {dispatch(removeFav(id))}
   }
} 

const mapStateToProps = (state) => {
   return {

      myFavorites:state.myFavorites

   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Card);