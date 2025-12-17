import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //addcart
        addToCart:(state,action)=>{
            const existingProduct= state.find(item=>item.id==action.payload.id)
            if(existingProduct){
               existingProduct.quantity++
               existingProduct.totalPrice=existingProduct.quantity  * existingProduct.price
               const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
               state=[...remainingProducts,existingProduct]
            }
            else{
              state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        },
        removeCartItem:(state,action)=>{
         return state.filter(item=>item.id!=action.payload)
        },
        //increment
        incrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
            const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProducts,existingProduct]
        },
       //decrement
         decrementCartItem:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity * existingProduct.price
            const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProducts,existingProduct]
        },
        emptyCart:(state)=>{
            return[]
        }
    }
})
export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer