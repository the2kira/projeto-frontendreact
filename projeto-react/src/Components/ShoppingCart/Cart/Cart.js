import React from 'react'
import { Section } from './CartStyle'
import { CartCard } from '../CartCard/CartCard'

export function Cart(props) {

	const { amount, setAmount, cart, setCart, adicionarAoCarrinho, removeCarrinho, soma, setSoma } = props

	return <Section>
		<h3>Carrinho 🛒</h3>
		<p>Valor total: R${soma.toFixed(2)}</p>
		
		
{cart.map((product) => (

			<CartCard
			product={product} 
			key={product.id}
			adicionarAoCarrinho={adicionarAoCarrinho}
			removeCarrinho={removeCarrinho}
			/>
		))}		
	</Section>
}
