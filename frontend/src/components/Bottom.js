import React from 'react'
import '../styles/hat.styles.css'


const Bottom = ({item, addToCart}) => {
    // console.log({item})
    return (
        
        <div className="collection-div">
       {item.items.map((item) => (
            <div className="item-div" key={item.id}>
               
           {/* { console.log({item})} */}
                <h4 className="item-title" >{item.name}</h4>
                <img className="image" src={item.imageUrl} width="250px" height="300px" />
                <p className="price">${item.price}</p>
                <button className="add-btn">Add to Cart</button>
            </div>  
        ))}
    </div>
    )
    
}


export default Bottom