import React from 'react'
import { Container, Section } from './CartStyle'

export function Cart() {
	return <Section>
		<h3>Carrinho</h3>
		<Container>
		<p>1x</p>
		<p>Produto</p>
		<button>Remover</button>
		</Container>
	</Section>
}
