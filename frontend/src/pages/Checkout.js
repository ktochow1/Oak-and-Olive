import React from 'react'
import '../styles/checkout.styles.css'

import {connect} from 'react-redux'
import {increaseQuantity} from '../redux/cart/cart.actions'
import {decreaseQuantity} from '../redux/cart/cart.actions'
import {removeItem} from '../redux/cart/cart.actions'

import TakeMoney from '../components/TakeMoney'

class Checkout extends React.Component {
 
    allItems = () => {
        let cartProps = this.props.cart.cartItems
        
        let cartItem = cartProps.map(item => {
            return (
                <div className="each-item" id={item.id}>
                    <p className="item-style">{item.name}</p>
                    <img id="thumbnail" className="item-style" src={item.imageUrl} />
                    <p className="item-style">price {item.price}</p>  

                   <p className="item-style" onClick={this.handleClickIncrease}>+</p>
                    <p className="item-style">quantity {item.quantity}</p>
                    <p className="item-style" onClick={this.handleClickDecrease}>-</p>              
                    <p className="item-style" onClick={this.handleClickRemove}>x remove</p>
                    <hr className="dashed"></hr>
                </div>
            )
        })
        return cartItem 
    }

    handleClickIncrease = event => {
        console.log(this.props)
        this.props.increaseQuantity(event.target.parentElement)
    }

    handleClickDecrease = event => {
        this.props.decreaseQuantity(event.target.parentElement)
    }

    handleClickRemove = event => {
        // console.log(event.target.parentElement.id)

        this.props.removeItem(event.target.parentElement)

    }

    total = () => {
        let allItems = this.props.cart.cartItems.map(item => {
            let itemTimesQuantity = (item.price) * item.quantity
            return itemTimesQuantity
        })
        if(allItems.length === 0){
            return (
                <div className="center">
                    your cart is empty
                </div>
            )
        } 
        
        else {
            let totalPrice = allItems.reduce((accumulator, currentValue) => accumulator + currentValue)
            return (
                <div className="center">Total ${totalPrice}</div>)
        }
    }

    render(){
        return(
            <div className="all-items">
                    {this.allItems()} 
                    
                    <p className="total">
                    {this.total()}
                    </p>
                {/* </div> */}
                <div id="center">
                    {this.props.cart.cartItems.length === 0 ? <></> : <TakeMoney price={this.total()} items={this.props.cart.cartItems} />}
                </div>
            </div>         
        )
    }
}


const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    increaseQuantity: item => dispatch(increaseQuantity(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item)),
    removeItem: item => dispatch(removeItem(item)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)