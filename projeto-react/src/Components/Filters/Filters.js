import React from 'react'
import { Filtros } from './FiltersStyle'

export function Filters(props) {

	const { minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter, productList } = props

	const mudaMinFilter = (event) => setMinFilter(event.target.value)
	const mudaMaxFilter = (event) => setMaxFilter(event.target.value)
	const mudaSearchFilter = (event) => setSearchFilter(event.target.value)

	//////////////////////////////////////////////////////////////////////////////const ordenarPorValorMinimo = () =>{




	//}


	return <div>
		<Filtros>
		<h3>Filtros</h3>

			<label htmlFor='valorMinimo'>Valor mínimo:</label><br/>
			<input 
			type='number' 
			id='valorMinimo' 
			value={minFilter} 
			onChange={mudaMinFilter} 
			min={0} />
			<br/><br/>

			<label htmlFor='valorMaximo'>Valor máximo:</label><br/>
			<input 
			type='number' 
			id='valorMaximo' 
			value={maxFilter} 
			onChange={mudaMaxFilter} 
			min={0} />
			<br/><br/>

			<label htmlFor='buscaPorNome'>Busca por nome:</label><br/>
			<input 
			 id='buscaPorNome'
			 value={searchFilter} 
			 onChange={mudaSearchFilter}/>
		</Filtros>
	</div>
}
