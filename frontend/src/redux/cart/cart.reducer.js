import { addToCart } from './cart.actions'
import {addItem} from './cart.helpers'


 const cartReducer = (state={cartItems: []}, action) => {
    console.log(state, action)
    switch(action.type){
        case 'ADD_TO_CART':

                return {
                   ...state,
                   cartItems: addItem(state.cartItems, action.payload)
                }
        case 'INCREASE_QUANTITY':
            console.log(action, state)
            action.payload++
            return {
                ...state,
                cartItems: [...state.cartItems]
                
            }

        default:
            return state
    }
}

export default cartReducer