import React from 'react'
import {Navlink} from 'react-router-dom'

export default function ProductCard(props) {
  const {productName} = props.product
  return (
    <div className="product-card">
      <h1>{productName}</h1>
    </div>
  )
}
