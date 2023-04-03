import React from 'react'
import { Container1, Container2, DivPrincipal, Produto, Img, Informacoes } from './HomeStyle'
import Produto1 from "./midia/produto1.jpg"
import Produto2 from "./midia/produto2.jpg"


export function Home() {
	return <DivPrincipal>
		<Container1>
			<div>
				<p>Quantidade de produtos: 2</p>
			</div>
			<div>
				<p>Ordenação: [caixa]</p>
			</div>
		</Container1>
		<Container2>
			<Produto>
				<Img src={Produto1} alt='imagem-produto1' />
				<Informacoes>
					<p>Produto 1</p>
					<p>R$200,00</p>
					<button>Adicionar ao Carrinho</button>
				</Informacoes>
			</Produto>
			<Produto>
				<Img src={Produto2} alt='imagem-produto2' />
				<Informacoes>
					<p>Produto 2</p>
					<p>R$900,00</p>
					<button>Adicionar ao Carrinho</button>
				</Informacoes>
			</Produto>
		</Container2>
	</DivPrincipal>
}
