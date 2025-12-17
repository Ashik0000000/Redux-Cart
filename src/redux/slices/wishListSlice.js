import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice(
    {
        name:'wishList',
        initialState:[],
        reducers:{
            //add to wishlist-
            addToWishlist:(state,action)=>{
                state.push(action.payload)
            },
            //remove from wishlist
            removeWishlistItem:(state,action)=>{
              return state= state.filter(item=>item.id!=action.payload)
            }
        }
    }
)
export const{addToWishlist,removeWishlistItem}=wishListSlice.actions
export default wishListSlice.reducer
