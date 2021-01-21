import React from 'react'
import '../styles/hat.styles.css'
import {connect} from 'react-redux'
import {addToCart} from '../redux/cart/cart.actions'


const Bottom = ({item, addToCart}) => {

        // function toSort(){
            // let containerDiv = document.querySelectorAll('.collection-div')
            // let itemDiv = document.querySelectorAll('.item-div')
            // console.log(containerDiv)
            // console.log(itemDiv)
            // let sortedItems = Array.from(itemDiv).sort((a, b) => {
                // console.log(a.children[2].innerHTML.split(''))
        //         let high = b.price 
        //         if(low < high){
        //             return -1
        //         }
        //         if(low > high){
        //             return 1
        //         }
        //         return 0
        //     })
        //   containerDiv.forEach((item) => {
        //       item.remove()
        //   })
        //   sortedItems.forEach((item) => {
        //     itemDiv.append(item)
        //   })
        //   return sortedItems
        // })
        // console.log(sortedItems)
    // }
        


   
    return (
        
        <div className="collection-div">
       {/* <button>sort</button> */}
       {item.items.map((item) => (
        
            <div className="item-div" key={item.id}>
                <h4 className="item-title" >{item.name}</h4>
                <img className="image" src={item.imageUrl} width="250px" height="300px" />
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


export default connect(null, mapDispatchToProps)(Bottom)