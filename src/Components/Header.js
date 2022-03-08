import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Cart } from '../Context';
const Header = () => {
    const{ cart, setCart} = useContext(Cart)
  return (
    <div>
        <span className='header'>context api</span>
        <ul className='nav'>
            <li className='prod'>
                <Link to='/'>Homepage</Link>
            </li>
            <li className='prod1'>
                <Link to='cart'>Cart({cart.length})</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header