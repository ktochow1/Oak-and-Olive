import React from 'react'
import {connect} from 'react-redux'

import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg'

import '../styles/cart-icon.styles.css'

const CartIcon = (state) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        {/* <span className="item-count">{addItem(state)}</span> */}
        <span className="item-count">{addItem(state)}</span>
        {/* {console.log(addItem(state))} */}
        {/* {addItem(state)} */}
    </div>
)



function addItem(state){
    if(state.cart.cartItems.length === 0){
        return 0
    }
    if(state.cart.cartItems.length > 0){
        let quantityArray = state.cart.cartItems.map((item) => {
            return item.quantity

        })
        let totalItems = quantityArray.reduce((accumulator, currentValue) => accumulator + currentValue)
        return totalItems
    }

       


    
    //     // item.quantity    
    //     // console.log(item.quantity)
    // let totalItems = quantityArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    // return totalItems
    //     // console.log(totalItems)
    // })
    // console.log(state.cart.cartItems.length)
    // console.log(quantityArray())

}

const mapStateToProps = state => ({
    cart: state.cart
})
export default connect(mapStateToProps)(CartIcon)