import React from 'react'
import '../styles/hat.styles.css'

import {connect} from 'react-redux'
import { addToCart } from '../redux/cart/cart.actions'
// import {Link} from 'react-router-dom'
// import {useRouteMatch} from 'react-router-dom'
// import INVENTORY_DATA from '../Inventory/inventoryData'

// class Hat extends React.Component {
//     constructor(props){
//         super(props)
//         this.imageRef = React.createRef()
//     }

//     componentDidMount(){
//         console.log(this.imageRef)
//     }

//     render(){
//         // const {title, items} = this.props
//         const displayHat = ({title, items}) => (
//             items.map((item) => (
//                 <img ref={this.imageRef} src={items.imageUrl.small}/>
//             ))
            
//         )
//         return(
//             <div>
//                 {this.displayHat}
//             </div>
//         )
//     }
// }


// const Hat = ({title, items, addToCart})
const Hat = ({item, addToCart}) => {
    
    // const {id, name, imageUrl, price} = item;
    // console.log(item.items)
    // console.log(this.props)
    return (
    <div  className="collection-div">
        {item.items.map((item) => (
            <div className="item-div" key={item.id}>
                <h4 className="item-title">{item.name}</h4>
                <img className="image" src={item.imageUrl} width="250px" height="300px"></img>
                {/* <img ref={this.props.imageRef} src={item.imageUrl} width="250px" height="auto"></img> */}
                <p className="price">${item.price}</p>
                {/* {console.log(item)} */}
                <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
            </div>
         ))}
    </div>
    )
}

function handleClick(event){
    console.log("click")
    // props.addToCart()
    // console.log(event.target.parentElement.childNodes)
    let dataArr = event.target.parentElement.childNodes
    // let title = dataArr[0].innerHTML
    // let image = dataArr[1].currentSrc 
    // let price = dataArr[2].innerHTML
    let cartItem = {
        title: dataArr[0].innerHTML,
        image: dataArr[1].currentSrc,
        price: dataArr[2].innerHTML
    }
    // console.log({cartItem)}
    addToCart(cartItem)

    

}

const mapDispatchToProps = (dispatch) => ({
    addToCart: cartItem => dispatch(addToCart(cartItem))
})

// const mapStateToProps = ({cart}) => ({
//     addToCart: cart.addToCart
// })


export default connect(null, mapDispatchToProps)(Hat)