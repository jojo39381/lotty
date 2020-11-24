
import './App.css';
import Home from './Home.js'
import Landing from './Landing.js'
import Product  from './Product.js'
import { Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history'
import {useEffect} from 'react'
function App() {

  const history = createBrowserHistory()
  ReactGA.initialize('UA-183883881-1');
  history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
});
useEffect(() => {
     ReactGA.pageview(window.location.pathname + window.location.search)
 }, [history])
  return (
    <div className="App">
      <Router history={history}>
       <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/product" component={Product}/>
        <Route path="/home" component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
