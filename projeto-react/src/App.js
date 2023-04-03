import './App.css';
import { Home } from './Components/ProductList/Home/Home'
import { Filters } from './Components/Filters/Filters'
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart'
import { Cart } from './Components/ShoppingCart/Cart/Cart'
import { Items } from './Components/ShoppingCart/Items/Items'
import { Container } from './Components/ContainerStyled'


function App() {

  return (
    <div>
    <Container>
    <Filters/>
    <Home/>
    <Cart/>
    </Container>
    </div>
  );
}


export default App;
