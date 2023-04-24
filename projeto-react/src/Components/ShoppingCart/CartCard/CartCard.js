import React from 'react'
import { Container } from './CartCardStyle'


export const CartCard = (props) => {

const { product, removeCarrinho } = props

  return (
    <Container>
    <p>{product.amount}x</p>
    <p>{product.name}</p>
    <button onClick={()=>removeCarrinho(product)}>X</button>
    </Container>
  )
}
