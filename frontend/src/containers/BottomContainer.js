import React from 'react'

// import Hat from '../components/Hat'
import INVENTORY_DATA from '../Inventory/inventoryData'
import Bottom from '../components/Bottom'

class BottomContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collections: INVENTORY_DATA,
            // spans: 0
        }
        // this.imageRef = React.createRef()
    }
    render(){
        const {collections} = this.state
        // console.log(collections)
        const bottomItems = collections.filter((items, idx) => idx > 0).map(({id, ...otherItemProps}) => (
            // collections.log(...otherPropItems),
            <Bottom key={id} {...otherItemProps} />
        ))
        return(
            <div>{bottomItems}</div>
        )
    }
}

export default BottomContainer