import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'

const Popular = () => {
  return (
    <>
      <h1>POPULAR IN MENS</h1>
      <div className='popular'>
        <div className="popular-item">
          {data_product.map((item, i) => {
            return <Item className="images" key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
      </div>
    </>

  )
}

export default Popular