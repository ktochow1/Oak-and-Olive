// import { addToCart } from './cart.actions'
import {addItem, decreaseQuantity, increaseQuantity, removeItem} from './cart.helpers'



 const cartReducer = (state={cartItems: []}, action) => {
    // console.log(state, action)
    switch(action.type){
        case 'ADD_TO_CART':

                return {
                   ...state,
                   cartItems: addItem(state.cartItems, action.payload)
                }
        case 'INCREASE_QUANTITY':
            // console.log(action, state)
            increaseQuantity(state.cartItems, action.payload)
            // action.payload++
            return {
                ...state,
                cartItems: [...state.cartItems],   
            }

        case 'DECREASE_QUANTITY':
            console.log(action)
            decreaseQuantity(state.cartItems, action.payload)
            return {
                ...state,
                cartItems: [...state.cartItems],
            }

        case 'REMOVE_ITEM':
            // console.log(action.payload.id)
            // removeItem(state.cartItems, action.payload)
            // let remainingItems = state.cartItems.filter(cartItem => {
            //     let intId = Number(action.payload.id)
            //     return cartItem.id !== action.payload.intId
            // })            
            // console.log(removeItem(state.cartItems, action.payload))
            
            return {
                ...state, 
                cartItems: removeItem(state.cartItems, action.payload)
                
            }
        
            

        default:
            return state
    }
}

export default cartReducer