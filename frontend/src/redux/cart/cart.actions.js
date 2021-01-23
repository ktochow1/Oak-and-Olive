export const addToCart = item => ({
    type: 'ADD_TO_CART',
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