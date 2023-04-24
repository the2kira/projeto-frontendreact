import React from 'react'
import { Produto, Img, Informacoes } from './ProductCardStyle'

export function ProductCard(props) {

	const { product, adicionarAoCarrinho } = props

	return (
			<Produto>
				<Img src={product.imageUrl} alt='imagem-produto' />
				<Informacoes>
					<p>{product.name}</p>
					<p>R${product.value}</p>
					<div>
					<button onClick={()=>adicionarAoCarrinho(product)}>Adicionar ao Carrinho</button>
					</div>
				</Informacoes>
			</Produto>
			)
}
