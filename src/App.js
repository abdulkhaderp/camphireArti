import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home';
import Contact from '../src/components/Contact/Contact';
import About from '../src/components/About/About';
import Product from './components/Product/Product';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <div className="container-fluid fh">
       <div className='row'>
                <header className="">
                    <Navigation/>
                </header>  
        </div>
    <Router>
    <Switch>
      <Route path='/' component={Home} exact></Route>
      <Route path="/home" component={Home} exact></Route>
      {/* <Route path="/contact" component={Contact} exact></Route> */}
      <Route path="/about" component={About} exact></Route>
      <Route path="/product" component={Product} exact></Route>
      <Route path="/cart" component={Cart} exact></Route>
      <Route path="/*" component={Home} >
        <Redirect to='/home'/>
      </Route>
    </Switch>
    
</Router>

</div>

    
  );
}
export default App;
