import React from 'react'
import './itemList.css'
import Item from '../Item/Item'

const ItemList = ( {infoCard = []}  ) => {
  return (
    infoCard.map(producto => <Item key={producto.id} contenido={producto} />)
  )
}

export default ItemList