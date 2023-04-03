import React from 'react'
import { Filtros } from './FiltersStyle'

export function Filters() {
	return <div>
		<Filtros>
		<h3>Filtros</h3>

			<p>Valor mínimo:</p>
			<input type='number' />

			<p>Valor máximo:</p>
			<input type='number' />

			<p>Busca por nome:</p>
			<input />
		</Filtros>
	</div>
}
