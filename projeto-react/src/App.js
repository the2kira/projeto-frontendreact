import { Home } from './Components/ProductList/Home/Home'
import { Filters } from './Components/Filters/Filters'
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart'
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import { Items } from './Components/ShoppingCart/Items/Items'
import { Container } from './Components/ContainerStyled'
import { useState } from 'react'
import ProductList from './assets/ProductList.json'
import { ProductCard } from './Components/ProductList/ProductCard/ProductCard'

function App() {

  
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [amount, setAmount] = useState("")

  const [cart, setCart] = useState([])
  const [soma, setSoma] = useState(0)


  //Função de adicionar ao Carrinho
  const adicionarAoCarrinho=(product)=>{

    const novoProduto = cart.find((item)=>(item.id === product.id))
    if(novoProduto===undefined){
      setCart([...cart, {...product, amount:1}])
      setSoma(soma + product.value)
    }else{
      setSoma(soma + product.value)
      const novoCarrinho=cart.map((item)=>{
        if(item.id === product.id){
          return{...novoProduto, amount: novoProduto.amount+1}
        }else{
          return item
        }
      }
      )

 setCart(novoCarrinho)
   
    }
  }

  //Função de remover do Carrinho
  const removeCarrinho=(product)=>{
    const produtoADeletar = cart.find((item)=>item.id==product.id)
    if(produtoADeletar.amount > 1){

     
      const novoCarrinho=cart.map((item)=>{
        if(item.id === product.id){
          setSoma(soma - product.value)
          return{...produtoADeletar, amount: produtoADeletar.amount-1}
        }else{
          return item
        }
      }
      )

      setCart(novoCarrinho)

    }else{
      const novoCarrinho=cart.filter((item)=>{
        setSoma(soma - product.value)
        return item.id!==product.id
      }
      )
      setCart(novoCarrinho)
    }
  }
  

  //RETURN PRINCIPAL DO APP, Apenas passando as funções e consts para os componentes filhos
  
  return (
    <div>
    <Container>
    <Filters 
    minFilter={minFilter} 
    setMinFilter={setMinFilter} 
    maxFilter={maxFilter} 
    setMaxFilter={setMaxFilter}
    searchFilter={searchFilter}
    setSearchFilter={setSearchFilter}
    productList={ProductList}/>
    <Home
    productList={ProductList}
    amount={amount}
    setAmount={setAmount}
    cart={cart}
    setCart={setCart}
    adicionarAoCarrinho={adicionarAoCarrinho}
   />
    <Cart
    amount={amount}
    setAmount={setAmount}
    cart={cart}
    setCart={setCart}
    adicionarAoCarrinho={adicionarAoCarrinho}
    removeCarrinho={removeCarrinho}
    soma={soma}
    setSoma={setSoma}
    />
    </Container>
    </div>
  );
}


export default App;
