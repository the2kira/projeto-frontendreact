import { Home } from './Components/ProductList/Home/Home'
import { Filters } from './Components/Filters/Filters'
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart'
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import { Items } from './Components/ShoppingCart/Items/Items'
import { Container } from './Components/ContainerStyled'
import { useState } from 'react'


function App() {

  
  const [minFilter, setMinFilter] = useState("")
  const [maxFilter, setMaxFilter] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [cart, setCart] = useState("")
  const [amount, setAmount] = useState("")  

  return (
    <div>
    <Container>
    <Filters 
    minFilter={minFilter} 
    setMinFilter={setMinFilter} 
    maxFilter={maxFilter} 
    setMaxFilter={setMaxFilter}
    searchFilter={searchFilter}
    setSearchFilter={setSearchFilter}/>
    <Home
    amount={amount}
    setAmount={setAmount}
    cart={cart}
    setCart={setCart}/>
    <Cart
    amount={amount}
    setAmount={setAmount}
    cart={cart}
    setCart={setCart}/>
    </Container>
    </div>
  );
}


export default App;
