import NavBar from './containers/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import ItemDetailContainer from './containers/ItemDetailContainer'
import ProductsPage from './containers/ProductsPage';
import CartPage from './containers/CartPage';
import ItemCategoryContainer from './containers/ItemCategoryContainer'

function App() {
  return (
    <Router>

    <NavBar />
      
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/ProductsPage">
        <ProductsPage />
      </Route>

      <Route path="/Category/:categoryName">
        <ItemCategoryContainer />
      </Route>

      <Route path="/ProductDetails/:id">
        <ItemDetailContainer />
      </Route> 

      <Route path="/CartPage">
        <CartPage />
      </Route> 

    </Switch>

    </Router>
  );
}

export default App;