import React from 'react'
import INVENTORY_DATA from '../Inventory/inventoryData'
import Top from '../components/Top'
// import SortButton from '../components/SortButton'


class TopContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            collections: INVENTORY_DATA,
        }
    } 

    


    render(){
        // let clicked = false

        // function handleClick(){
        //     clicked = true
        //     return clicked
        // }
        const {collections} = this.state
        
        const allTops = collections.filter((items, idx) => (idx === 2)).map(item => (
            <Top key={item.id} item={item} /> 
        ))
    
        return(
            <div>
            <p className="category-title">Tops</p>
            {/* <button onClick={handleClick}>Sort By Price</button> */}
            {/* {console.log(clicked)} */}
            {allTops}
            </div>
        )
    }

}



export default TopContainer