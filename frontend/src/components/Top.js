import React from 'react'
import '../styles/hat.styles.css'
import {connect} from 'react-redux'
import {addToCart} from '../redux/cart/cart.actions'
import { render } from '@testing-library/react'


class Top extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }
    
    render(){
        
        const handleClick = () => {
            this.setState({clicked: true})
        }  
            
        function sortByPrice(item){
            let sorted = item.items.sort((a, b) => {
                if(a.price < b.price){
                    return -1
                } 
                if(a.price > b.price){
                    return 1
                }
                    return 0
            })
            item.items = sorted
            return displaySortedTops(item)
            
        }
                
        function displaySortedTops(item){
            return item.items.map((item) => (
                            
             <div className="item-div" key={item.id}>
            {console.log(item)}
            <h4 className="item-title">{item.name}</h4>
            <img className="image" src={item.imageUrl} width="250px" height="550px" />
            <p className="price">$ {item.price}</p>
            <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
            </div>
            ))
        }
            
        function displayTops(item){
            return item.items.map((item) => (
                            
            <div className="item-div" key={item.id}>
            {console.log(item)}
            <h4 className="item-title">{item.name}</h4>
            <img className="image" src={item.imageUrl} width="250px" height="550px" />
            <p className="price">$ {item.price}</p>
            <button onClick={() => addToCart(item)} className="add-btn">Add to Cart</button>
            </div>
            ))
        }

        return (
            <>
            <button onClick={handleClick}>Sort by Price</button>
            <div className="collection-div">
            {this.state.clicked === false ? displayTops(this.props.item) : sortByPrice(this.props.item)}
            {console.log(this.state.clicked)}
            </div>
            </>
        )
    }
    
}



const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: cartItem => dispatch(addToCart(cartItem))
    }
    
}

export default connect(null, mapDispatchToProps)(Top)