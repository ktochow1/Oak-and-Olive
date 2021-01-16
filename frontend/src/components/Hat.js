import React from 'react'
import '../styles/hat.styles.css'
import {Link} from 'react-router-dom'
// import {useRouteMatch} from 'react-router-dom'
// import INVENTORY_DATA from '../Inventory/inventoryData'

// class Hat extends React.Component {
//     constructor(props){
//         super(props)
//         this.imageRef = React.createRef()
//     }

//     componentDidMount(){
//         console.log(this.imageRef)
//     }

//     render(){
//         // const {title, items} = this.props
//         const displayHat = ({title, items}) => (
//             items.map((item) => (
//                 <img ref={this.imageRef} src={items.imageUrl.small}/>
//             ))
            
//         )
//         return(
//             <div>
//                 {this.displayHat}
//             </div>
//         )
//     }
// }



const Hat = ({title, items}) => (
    
    <div  className="hat-div">
    {/* style={{gridRowEnd: `span ${this.props.span}`}} */}
        {/* <h2 className="category-title">{title.toUpperCase()}</h2> */}
        {items.map((item) => (
            <div className="item-div" key={item.id}>
                <h4 className="item-title">{item.name}</h4>
                <img className="image" src={item.imageUrl} width="250px" height="auto"></img>
                {/* <img ref={this.props.imageRef} src={item.imageUrl} width="250px" height="auto"></img> */}
                <p className="price">${item.price}</p>
                {/* {console.log(item)} */}
            </div>

        ))}
    </div>
)


export default Hat