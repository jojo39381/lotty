
import './App.css';

import Landing from './Landing.js'

import Home from './Home.js'
import TermsOfServices from './TermsOfServices'
import PrivacyPolicy from './PrivacyPolicy'
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter >
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/terms-of-services" component={TermsOfServices}/>
       <Route path="/privacy-policy" component={PrivacyPolicy}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
