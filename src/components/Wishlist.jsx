import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Cart from './Cart';

const Wishlist = () => {
    const {count} = useContext(CartContext);

  return (
    <div>
      {/* <Cart/> */}
      Wishlist: {count}
    </div>
  )
}

export default Wishlist;
