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
        {console.log(this.state)}
        const {collections} = this.state
        // console.log(collections)
        const bottomItems = collections.filter((items, idx) => (idx === 1)).map(item => (
            // collections.log({...otherPropItems}),
            <Bottom key={item.id} item={item} />
        ))
        // console.log(collections.filter((items, idx) => idx > 0))
        return(
            <div>
            <p className="category-title">Bottoms</p>
            {bottomItems}
            </div>
            
        )
    }
}

export default BottomContainer