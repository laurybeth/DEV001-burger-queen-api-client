import React from 'react'

export function Product ({ id, name, description, price, image }) {
  console.log('product', id)
  return (
    <div className='card container-product'>
     <div className="card-body body-product">
      <div className='left-side'>
        <div className='text-product'>{name}</div>
        <div className='text-product text-product-description'>{description}</div>
      </div>
      <div className='right-side'><img src={`${image}`}/></div>
     </div>
     <div className='card-footer body-product'>
      <div className='text-product left-side'>{price}</div>
      <div className='text-product right-side'><img></img>{1}<img></img></div>
     </div>
    </div>
  )
}
