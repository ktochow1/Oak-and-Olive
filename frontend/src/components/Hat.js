import React from 'react'
import '../styles/hat.styles.css'

import {connect} from 'react-redux'
import { addToCart } from '../redux/cart/cart.actions'



const Hat = ({item, addToCart}) => {

    return (
    <div  className="collection-div">
        {item.items.map((item) => (
            <div className="item-div" key={item.id}>
                <h4 className="item-title">{item.name}</h4>
                <img className="image" src={item.imageUrl} width="200px" height="300px"></img>
                <p className="price">${item.price}</p>
                <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
            </div>
         ))}
    </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    addToCart: cartItem => dispatch(addToCart(cartItem))
})



export default connect(null, mapDispatchToProps)(Hat)