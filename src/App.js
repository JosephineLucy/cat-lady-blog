import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import Buttons from "./components/Buttons";
import FullBlog from "./components/FullBlog";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route path={"/create"}>
              <Create />
            </Route>
            <Route path={"/buttons"}>
              <Buttons />
            </Route>
            <Route path={"/blogs/:id"}>
              <FullBlog />
            </Route>
            <Route path={"*"}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
