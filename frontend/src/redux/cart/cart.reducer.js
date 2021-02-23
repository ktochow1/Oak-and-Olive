// import { addToCart } from './cart.actions'
// import { requestItems } from './cart.actions'
import {addItem, decreaseQuantity, increaseQuantity, removeItem} from './cart.helpers'



 const cartReducer = (state={cartItems: [], popularItems: [], requesting: false}, action) => {
    // console.log(state, action)
    switch(action.type){

        case 'ADD_TO_CART':
        // console.log(state, action)
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
            return {
                ...state, 
                cartItems: removeItem(state.cartItems, action.payload)       
            }
        case 'REQUEST_POPULAR_ITEMS':
            // alert('Analyzing...')
            // console.log(state, action.data)
            return{
                ...state,
                // cartItems: [...state.cartItems],
                popularItems: [...state.popularItems],
                cartItems: [...state.cartItems],
                requesting: true,
                
                // cartItems: requestItems()
            }
        case 'GET_ITEMS':
            // alert('Loading...')
            // console.log(state, action.data)
            return {
                ...state,
                cartItems: [...state.cartItems],
                popularItems: [action.data],
                requesting: false
            }
            
        default:
            return state
    }
}

export default cartReducer