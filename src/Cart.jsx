import React from 'react'

import { useSelector ,useDispatch} from 'react-redux'
import ResCard from './ResCard';
import { clearCart } from './utils/CartSlice';


const Cart = () => {

    let cartItems = useSelector((state) => state.cart.items);

    let dispatch = useDispatch()

    let handleClearCart =()=>{
        dispatch(clearCart())
    }

  return (
    <div>
        
        <button className='btn btn-xs text-center' onClick={handleClearCart}> clear Cart</button>
   <div className="cards flex justify-around ">

   {cartItems.map((obj) =><ResCard obj={obj}></ResCard>) }
   </div>

       
      
    </div>
  )
}

export default Cart
