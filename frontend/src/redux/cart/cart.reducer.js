import { addToCart } from './cart.actions'
import {addItem} from './cart.helpers'


 const cartReducer = (state={cartItems: []}, action) => {
    //  console.log(state)
    switch(action.type){
        case 'ADD_TO_CART':

                return {
                   ...state,
                   cartItems: addItem(state.cartItems, action.payload)
                }

        default:
            return state
    }
}

export default cartReducer