
import './App.css';

import Landing from './Landing.js'
import Product  from './Product.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-183883881-1');
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
