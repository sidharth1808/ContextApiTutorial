import React, { useState } from 'react'
import faker from 'faker'
import SingleProduct from './SingleProduct'
import './HomePage.css'

faker.seed(100)

const HomePage = () => {
    const productsArray = [...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        productName : faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),

    }))
    //console.log(productsArray);
   
    const [products] = useState(productsArray);
  return (
      
    <div className='productsContainer'>
        {products.map((prod)=>(
            <SingleProduct prod={prod} />
        ))}
    </div>
  )
}

export default HomePage