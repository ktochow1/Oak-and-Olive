import React from 'react'
import INVENTORY_DATA from '../Inventory/inventoryData'
import Top from '../components/Top'


class TopContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            collections: INVENTORY_DATA,
        }
    }

    render(){
        // {console.log(this.state)}
        const {collections} = this.state
        const allTops = collections.filter((items, idx) => (idx === 2)).map(item => (
            <Top key={item.id} item={item} /> 
        ))
        return(
            <div>
            <p className="category-title">Tops</p>
                {allTops}
            </div>
        )
    }

}

export default TopContainer