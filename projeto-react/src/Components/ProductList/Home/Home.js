import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { Container1, Container2, DivPrincipal } from './HomeStyle'
import ProductList from '../../../assets/ProductList.json'


export function Home() {
	return <DivPrincipal>
		<Container1>
			<div>
				<p>Quantidade de produtos: {ProductList.length}</p>
			</div>
			<div>
				<p>Ordenação: [caixa]</p>
			</div>
		</Container1>
		<Container2>

		{ProductList.map((product) => (
			<ProductCard product={product} key={product.id}/>
		))}	

		</Container2>
	</DivPrincipal>
}