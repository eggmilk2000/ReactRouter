import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Register from './pages/register';
import Product from './pages/product';
import Login from './pages/login';
import './App.css';

function App() {

  return (
    <Router>
      <nav>
        <ul id="container">
          <li>
            <Link to="/"><button>Home</button></Link>
          </li> 
          <li>
            <Link to="/register"><button>Register</button></Link>
          </li>
          <li>
            <Link to="/login"><button>Login</button></Link>
          </li>
           <li>
            <Link to="/product"><button>Product</button></Link>
          </li> 
        </ul>
      </nav>
      <Switch>
         <Route path="/register">
          <Register />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
