export const addToCart = item => ({
    type: 'ADD_TO_CART',
    payload: item
})

export const increaseQuantity = item => ({
    type: 'CHANGE_QUANTITY',
    payload: item
})