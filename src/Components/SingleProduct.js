import React, { Profiler, useContext } from 'react'
import './HomePage.css'
import { Cart } from '../Context';

const SingleProduct = ({prod }) => {
    const{ cart, setCart} = useContext(Cart)
  return (
    <div className='products'>
        <img src={prod.image} alt={prod.name} />

        <div className='prodDesc'>
            <span>{prod.productName}</span>
            <span>${prod.price.substring(0,3)}</span>
        </div>
        {cart.includes(prod)?(
            <button 
            className='button'
            onClick={()=>{setCart(cart.filter((c)=>c.id!==prod.id))}}
            >Remove from cart</button>
        ):(<button 
            className='button'
            onClick={()=>{setCart([...cart,prod])}}
            >Add to cart</button>)}
        
       
    </div>
  )
};

export default SingleProduct