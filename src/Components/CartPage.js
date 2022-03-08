import React, { useEffect, useState, useContext } from 'react'
import './HomePage.css'
import SingleProduct from './SingleProduct'
import { Cart } from '../Context';

const CartPage = () => {
    const{ cart, setCart} = useContext(Cart)
    const [total, setTotal] = useState()
    useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price), 0));
    },[cart])
  return (
      <>
      <div>
        <span style={{fontSize: 30}}>My Cart</span>
        <br />
        <span style={{fontSize: 30}}>Total:{total}</span>
      </div>
    <div className='productsContainer'>
        {cart.map((prod)=>(
            <SingleProduct prod={prod} />
        ))}
    </div>
    </>
  )
}

export default CartPage