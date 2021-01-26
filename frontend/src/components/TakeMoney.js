import React from 'react'

import StripeCheckout from 'react-stripe-checkout';
import '../styles/takeMoney.styles.css'

const TakeMoney = ({price, items}) => {
    const amountForStripe = price * 100
    console.log(items)
    // onToken = token => {
    //     fetch('/save-stripe-token', {
    //         method: 'POST',
    //         body: JSON.stringify(token),
    //     }).then(response => {
    //         response.json().then(data => {
    //             alert(`We are in business, ${data.email}`)
    //         })
    //     })
    // }
   const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    const handleClick = event => {
        console.log("click")
        console.log(items)
        fetch('http://localhost:3000/api/v1/popular_products_new', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(items)
        })
         
    }
        return(
            
            <button onClick={handleClick} id="checkout">
                <StripeCheckout 
                // token={this.onToken} stripeKey="my_PUBLISHABLE_stripekey"
                token={onToken}
                label="Checkout"
                stripeKey="pk_test_51IDc5OA74GvZO4G1ttPp2zC3Tjj4UqhEnqsPQglzJ5p156ihBaQ9ORBPXwbji9LOfmQl9gdsMS6LC4O4gmC0rzfP000CaZ7n7w"
                name="Oak and Olive"
                billingAddress 
                shippingAddress
                amount={amountForStripe}
                description={`Your total is $${price.props.children[1]}`}
                 />
            </button>
            
        )
}

export default TakeMoney

