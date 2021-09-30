import "./App.css";
import Home from "./Home.js";
import TermsOfServices from "./TermsOfServices";
import PrivacyPolicy from "./PrivacyPolicy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import textFile from "./app-ads.txt";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/terms-of-services" component={TermsOfServices} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/app-ads.txt" component={textFile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
