import { Route, Switch, Redirect } from "react-router-dom";
import CardStudent from "./Pages/cardStudent";
import Home from "./Pages/home";
import Header from "./Components/header";
import Contact from "./Pages/contact";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/cardStudent" exact component={CardStudent} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
