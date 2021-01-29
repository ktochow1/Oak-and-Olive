import React from 'react'

class PopularProducts extends React.Component {


    render(){
    //    const popularProducts = () => {
    //         fetch('http://localhost:3000/api/v1/popular_products_sorted')
    //         .then(response => response.json())
    //         .then(stuff => {
    //             // console.log(stuff)

    //             // let itemArray = stuff 
    //             // let i = 0;
    //             let popularItems = {}
    //             let hash = {}
    //             for(let i = 0; i < stuff.length; i++){
    //                 if(stuff[i].category_id !== popularItems.category_id ){
    //                     popularItems.name = stuff[i]["name"]
    //                     popularItems.category_id = stuff[i]["category_id"]
    //                     popularItems.quantity = stuff[i]["quantity"]
    //                     popularItems.id = stuff[i]["id"]
    //                     popularItems.imageUrl = stuff[i]["image_url"]
    //                     // console.log(popularItems)
    //                 } else if (stuff[i].category_id === popularItems.category_id){
    //                     const reducer = (stuff, hashQ) => {stuff.quantity += hashQ.quantity}
    //                     console.log(popularItems.reduce(reducer))
    //                     hash.quantity = popularItems.quantity += stuff[i].quantity 
    //                     hash.category_id = stuff[i].category_id

    //                     // console.log(hash)
    //                 }
    //             }
        
        
    //             }      
    //         )
    //     }
        return(
            <div>
            {/* {popularProducts()} */}
            </div>
        )
    }
}

export default PopularProducts

