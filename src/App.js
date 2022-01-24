import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routeUrl from "./constants/routeUrl";
import Homepage from "./pages/HomePage";
import "./styles/styles.css";
import "react-datetime/css/react-datetime.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Homepage path={routeUrl.HOME_PAGE} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
