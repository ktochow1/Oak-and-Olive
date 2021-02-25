// import { addToCart } from './cart.actions'
// import { requestItems } from './cart.actions'
import {addItem, decreaseQuantity, increaseQuantity, removeItem, sortPrice} from './cart.helpers'



 const cartReducer = (state={cartItems: [], popularItems: [], requesting: false}, action) => {
    switch(action.type){
    
        case 'ADD_TO_CART':
            console.log(action)
                return {
                   ...state,
                   cartItems: addItem(state.cartItems, action.payload)
                }
        case 'INCREASE_QUANTITY':
            increaseQuantity(state.cartItems, action.payload)
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
            return{
                ...state,
                popularItems: [...state.popularItems],
                cartItems: [...state.cartItems],
                requesting: true,
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
        
        case 'SORT_ITEMS':
            console.log('reducer')
            // console.log(action)
            sortPrice(action.payload)
            
        default:
            return state
    }
}

export default cartReducer