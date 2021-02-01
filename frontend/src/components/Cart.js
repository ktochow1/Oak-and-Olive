import React from 'react'
import {connect} from 'react-redux'
import Checkout from '../pages/Checkout'
import {Link} from 'react-router-dom'

// import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg'

// import '../styles/cart-icon.styles.css'

const Cart = (state) => (
    <div className="cart-icon">
    
    <Link to="/checkout"><p className="shopping-icon" component={Checkout} to="/checkout">Cart</p>
    {/* <ShoppingIcon className="shopping-icon" component={Checkout} to="/checkout" /> */}

    </Link>
        {/* <span className="item-count">{addItem(state)}</span> */}
        <span className="item-count">{addItem(state)}</span>
        {/* {console.log(addItem(state))} */}
        {/* {addItem(state)} */}
    </div>
)



function addItem(state){
    if(state.cart.cartItems.length === 0){
        return;
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
export default connect(mapStateToProps)(Cart)