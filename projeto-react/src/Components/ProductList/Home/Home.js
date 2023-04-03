import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { Container1, Container2, DivPrincipal } from './HomeStyle'
import ProductList from '../../../assets/ProductList.json'
import { useState } from 'react'


export function Home(props) {

	const { amount, setAmount, cart, setCart } = props

	const Component = () => {
		const [ordination, setOrdination] = useState("") 

		  const changeOrdination = (event) => {
			setOrdination(event.target.value);
		  };
		  
		return(
			<select value={ordination} onChange={changeOrdination}>
					<option>Crescente</option>
					<option>Decrescente</option>
					<option>Menor Valor</option>
					<option>Relevância</option>
					</select>

		)
		}

	return <DivPrincipal>
		<Container1>
			<div>
				<p>Quantidade de produtos: {ProductList.length}</p>
			</div>
			<div>
				<p>Ordenação: <Component/></p> 		
			</div>
		</Container1>
		<Container2>

		{ProductList.map((product) => (
			<ProductCard product={product} key={product.id}/>
		))}	

		</Container2>
	</DivPrincipal>
}