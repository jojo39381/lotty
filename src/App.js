
import './App.css';
import Home from './Home.js'
import Landing from './Landing.js'
import Product  from './Product.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
       <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/product" component={Product}/>
        <Route path="/home" component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
