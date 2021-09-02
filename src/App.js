import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home"
import ArticlePage from "./components/ArticlePage/ArticlePage"

function App() {
  return (
      <Router>
      <Switch>
        <Route path="/article"><ArticlePage /></Route>
        <Route path="/"><Home/></Route>
      </Switch>
      </Router>
  );
}

export default App;
