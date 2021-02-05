import React from 'react'

import INVENTORY_DATA from '../Inventory/inventoryData'
import Bottom from '../components/Bottom'

class BottomContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collections: INVENTORY_DATA,
        }
    }

    
    render(){
        

        const {collections} = this.state
    
        const bottomItems = collections.filter((items, idx) => (idx === 1)).map(item => (
            <Bottom key={item.id} item={item}/>
        ))
        return(
            <div>
            <p className="category-title">Bottoms</p>
            {bottomItems}
            </div>
            
        )
    }
}




export default BottomContainer