
export const addTo_Cart = (produit) => {
  return {
    type:'addTo_cart',
    produit
  }
}


 export const cart_amount = (amount) => {
  return {
    type:'amount',
    amount
  }
}

export const shoping_cart = () => {
  return {
    type:'clear'
    
  }
}
export const DicreaseQuantity = (id,item) => {
  return {
    type:'DicreaseQuantity',
    paytoad:{id,item}
  }
}
export const addTo_Favorite= (product,id) => {
  return {
    type:'addTo_Favorite',
    payload:{product,id}
  }
}
export const addorder= (order) => {
  return {
    type:'addorder',
    order
   
  }
}


