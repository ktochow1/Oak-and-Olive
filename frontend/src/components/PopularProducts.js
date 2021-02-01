import React from 'react'
import {connect} from 'react-redux'
import {requestItems} from '../redux/cart/cart.actions'
import {addToCart} from '../redux/cart/cart.actions'

import '../styles/popularProducts.styles.css'

class PopularProducts extends React.Component {

    componentDidMount(){
       this.props.requestItems()
    }

    handleClick = (event) => {
        console.log(event)
        // let dataArr = event.target.parentElement.childNodes

        // let cartItem = {
        //     title: dataArr[0].innerHTML,
        //     image: dataArr[1].currentSrc,
        //     price: dataArr[2].innerHTML
        // }

        // addToCart(cartItem)    
        
    }

    render(){
        console.log(this.props.cart.popularItems[0])
        let items = this.props.cart.popularItems[0] === undefined ? <></> :
        this.props.cart.popularItems[0].map((item) =>  ( 
            
            <div className="item" >
                <h4 key={item.id}>{item.name}</h4>
                <img className="image" src={item.image_url} width="250px" height="300px"/>
                <p >${item.price}</p>
                <button  onClick={this.handleClick}>Add To Cart</button>
            </div>
            )
        )

        return(
            <>
            <h2 className="page-title">popular items from each category</h2>
            <div className="collection">
            {items}
            </div>
            </>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        requestItems: () => dispatch(requestItems()),
        addToCart: (item) => dispatch(addToCart(item))
    }
}

function mapStateToProps(state){
    return {cart: state.cart}
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularProducts)

