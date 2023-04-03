import React from 'react'
import { Filtros } from './FiltersStyle'

export function Filters(props) {

	const { minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter } = props

	const mudaMinFilter = (event) => {
		setMinFilter(event.target.value)
	}

	const mudaMaxFilter = (event) => {
		setMaxFilter(event.target.value)
	}

	const mudaSearchFilter = (event) => {
		setSearchFilter(event.target.value)
	}

	return <div>
		<Filtros>
		<h3>Filtros</h3>

			<p>Valor mínimo:</p>
			<input type='number' value={minFilter} onChange={mudaMinFilter} min={0} />

			<p>Valor máximo:</p>
			<input type='number' value={maxFilter} onChange={mudaMaxFilter} min={0} />

			<p>Busca por nome:</p>
			<input value={searchFilter} onChange={mudaSearchFilter}/>
		</Filtros>
	</div>
}
