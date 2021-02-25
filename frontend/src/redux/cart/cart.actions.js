export const addToCart = item => ({
    type: 'ADD_TO_CART',
    payload: item
})

export const sortItems = item => ({
    type: 'SORT_ITEMS',
    payload: item
})

export const increaseQuantity = item => ({
    type: 'INCREASE_QUANTITY',
    payload: item
}) 

export const decreaseQuantity = item => ({
    type: 'DECREASE_QUANTITY',
    payload: item
})

export const removeItem = item => ({
    type: 'REMOVE_ITEM',
    payload: item
})

export function requestItems(){
    // console.log("hey")
    return (dispatch) => {
        dispatch({type: 'REQUEST_POPULAR_ITEMS'})
        fetch('http://localhost:3000/api/v1/popular_products_sorted')
        .then(resp =>  resp.json())
        .then(data => {
            // console.log(data, state)
            dispatch({type: 'GET_ITEMS', data})
        })
    }
}