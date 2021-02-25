import React from 'react'
import {connect} from 'react-redux'
// import { isThisTypeNode } from 'typescript'
import {requestItems} from '../redux/cart/cart.actions'
import {addToCart} from '../redux/cart/cart.actions'

import '../styles/popularProducts.styles.css'

class PopularProducts extends React.Component {


    componentDidMount(){
       this.props.requestItems()
    }
    

    // handleClick = (event) => {
    //     console.log(event)
        // let dataArr = event.target.parentElement.childNodes

        // let cartItem = {
        //     title: dataArr[0].innerHTML,
        //     image: dataArr[1].currentSrc,
        //     price: dataArr[2].innerHTML
        // }

        // addToCart(cartItem)    
        
    // }
    handleClick = (event) => {
        let id = Number(event.target.parentNode.id)
        let name = event.target.parentElement.childNodes[0].innerHTML
        let img = event.target.parentNode.childNodes[1].currentSrc 
        let price = Number(event.target.parentNode.childNodes[2].innerHTML.split(' ')[1])
        let cartItem = {
            id: id,
            name: name,
            imageUrl: img,
            price: price
        }
        this.props.addToCart(cartItem)

        
    }

    render(){
        // let popItems = this.props.cart.popularItems

        let items = this.props.cart.popularItems.map(items => items.map((item) => 
        (
            <div className="item" key={item.id} id={item.id}>
            <h4 className="item-name" >{item.name}</h4>
            <img className="image" src={item.image_url} alt="model" width="250px" height="380px"/>
            <p className="item-price">$ {item.price}</p>
            <button className="item-btn" onClick={this.handleClick}>Add To Cart</button>
        </div>
        )))

        return(
            <>
            <h2 className="page-title">Our most loved items</h2>
            <div className="collection">
            {/* {console.log(this.props)} */}
            {items}
            </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    requestItems: () => dispatch(requestItems()),
    addToCart: cartItem => dispatch(addToCart(cartItem))
})
    

    


function mapStateToProps(state){
    return {cart: state.cart}
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProducts)

