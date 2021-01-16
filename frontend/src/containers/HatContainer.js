import React from 'react'
import Hat from '../components/Hat'
import INVENTORY_DATA from '../Inventory/inventoryData'
// import Bottom from '../components/Bottom'
import '../styles/hatsContainer.styles.css'

class HatContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collections: INVENTORY_DATA,
            // spans: 0
        }
        // this.imageRef = React.createRef()
    }

    // componentDidMount(){
    //     this.imageRef.current.addEventListener("load", this.setSpans)
    // }

    // setSpans = () => {
    //     const height = this.imageRef.current.clientHeight;
    //     const spans = Math.ceil(height / 200);
    //     this.setState({spans: spans})
    // }
    render(){
        const {collections} = this.state
         
        // console.log(this.state)
        const hatItems = collections.filter((items, idx) => idx < 1).map(({id, ...otherItemProps}) => (
            <Hat key={id} {...otherItemProps} />
        ))
        // const bottomItems = collections.filter((items, idx) => idx < 2 && idx > 1, console.log(this.props)).map(({id, ...otherItemProps}) => (
        //     <Bottom key={id} {...otherItemProps} />
        // ))
        // const bottomItems = collections.filter((items, idx) => idx).map(({id, ...otherItemProps}) => (
        //     <Hat key={id} {...otherItemProps} />
        // ))
        
        return(
            <div >
            <p className="category-title">Hats</p>
                {hatItems}
            </div>
        )
    }
}

export default HatContainer