import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home"
import ArticlePage from "./components/ArticlePage/ArticlePage"

//this file is our parent for the entire project in a way

function App() {
  return (
      <Router>
        {/* we only have two routes and have used simple switch case statement to render whatever route we want */}
      <Switch>
        <Route path="/article"><ArticlePage /></Route>
        <Route path="/"><Home/></Route>
      </Switch>
      </Router>
  );
}

export default App;
