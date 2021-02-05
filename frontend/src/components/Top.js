import React from 'react'
import '../styles/hat.styles.css'
import {connect} from 'react-redux'
import {addToCart} from '../redux/cart/cart.actions'



const Top = ({item, addToCart}) => {
    return (
        <div className="collection-div">
            {item.items.map((item) => (
                
                <div className="item-div" key={item.id}>
                {console.log(item)}
                <h4 className="item-title">{item.name}</h4>
                <img className="image" src={item.imageUrl} width="250px" height="550px" />
                <p className="price">${item.price}</p>
                <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: cartItem => dispatch(addToCart(cartItem))
})

// const mapStateToProps = state => ({
//     item: state.item
// })



export default connect(null, mapDispatchToProps)(Top)