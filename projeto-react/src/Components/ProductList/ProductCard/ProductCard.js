import React from 'react'
import { Produto, Img, Informacoes } from './ProductCardStyle'

export function ProductCard(props) {

	const { product } = props

	return (
			<Produto>
				<Img src={product.imageUrl} alt='imagem-produto' />
				<Informacoes>
					<p>{product.name}</p>
					<p>R${product.value}</p>
					<button>Adicionar ao Carrinho</button>
				</Informacoes>
			</Produto>
			)
}
