import "./App.css";
import Home from "./Home.js";
import TermsOfServices from "./TermsOfServices";
import PrivacyPolicy from "./PrivacyPolicy";
import JoinNow from "./JoinNow";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import textFile from "./app-ads.txt";

function App() {
  const reload = () => window.location.reload();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/terms-of-services" component={TermsOfServices} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/join-now" component={JoinNow} />
          <Route path="/app-ads.txt" onEnter={reload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
