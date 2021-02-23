import React from 'react'
import '../styles/hat.styles.css'
import {connect} from 'react-redux'
import {addToCart} from '../redux/cart/cart.actions'



const Top = ({item, addToCart}) => {
   function handleClick(){
       let container = document.querySelector('.collection-div')
        let topNodesArr = document.querySelectorAll('.item-div')
        let sortedByPrice = Array.from(topNodesArr).sort((a, b) => {
            let aItem = a.children[2].innerHTML.split(' ')[1]
            let bItem = b.children[2].innerHTML.split(' ')[1]
            if(aItem < bItem){
                return -1
            }
            if(aItem > bItem){
                return 1
            }
            return 0
        })
        topNodesArr.forEach((node) => node.remove())
        sortedByPrice.forEach((node) => container.append(node))
        return sortedByPrice
   }

    return (
        <>
        <button onClick={handleClick}>Sort by Price</button>
        <div className="collection-div">
        
            {item.items.map((item) => (
                
                <div className="item-div" key={item.id}>
                {/* {console.log(item)} */}
                <h4 className="item-title">{item.name}</h4>
                <img className="image" src={item.imageUrl} width="250px" height="550px" />
                <p className="price">$ {item.price}</p>
                <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
                </div>
            ))}
        </div>
        </>
    )
}



const mapDispatchToProps = dispatch => ({
    addToCart: cartItem => dispatch(addToCart(cartItem))
})

// const mapStateToProps = state => ({
//     item: state.item
// })



export default connect(null, mapDispatchToProps)(Top)