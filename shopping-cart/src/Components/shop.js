import React from 'react'

import Data from '../Shop-Data/shopData'
import Item from './item'

const shop = ({handleClick}) => {
  return (
    <section>
      {Data.map((item)=>(
            <Item key={item.id} item={item} handleClick={handleClick}  />
        ))}
    </section>
  )
}

export default shop