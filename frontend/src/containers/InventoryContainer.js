import React from 'react'
import INVENTORY_DATA from '../Inventory/inventoryData'


class InventoryContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collection: INVENTORY_DATA
        }
    }

    render(){
        const {collection} = this.state
        return(
            <div className="inventory">{
                collection.map(({id, ...otherItemProps}) => (
                    <>
                        <Hat key={id} {...otherItemProps} />
                        <Bottom key={id} {...otherItemProps}/>
                    </>
                ))
            }</div>
        )
    }
}