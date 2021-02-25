export const addItem = (cartItems, itemToAdd) => {
    const itemExists = cartItems.find(cartItem => cartItem.id === itemToAdd.id)
    if(itemExists) {
      return cartItems.map((cartItem) => cartItem.id === itemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem
       );
    } 
        return [...cartItems, {...itemToAdd, quantity: 1}]  
}

export const increaseQuantity = (cartItems, itemToIncrease) => {
  console.log(cartItems, itemToIncrease)
  let intItemId = Number(itemToIncrease.id)

  const increaseQuantity = cartItems.find(cartItem => cartItem.id === intItemId)

  return increaseQuantity.quantity++
}

export const decreaseQuantity = (cartItems, itemToDecrease) => {
  let intItemId = Number(itemToDecrease.id)
  const decreaseQuantity = cartItems.find(cartItem => cartItem.id === intItemId)
  if(decreaseQuantity.quantity === 1){
    return; 
  } else {
    return decreaseQuantity.quantity--
  }
}

export const removeItem = (cartItems, itemToRemove) => {
  let intItemId = Number(itemToRemove.id)
  let remainingItems = cartItems.filter(cartItem => cartItem.id !== intItemId)
  return remainingItems
}

export const sortPrice = (item) => {
  console.log('helper', item)
}