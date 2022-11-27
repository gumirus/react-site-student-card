import { Route, Switch, Redirect } from "react-router-dom";
import Student from "./Pages/student";
import Home from "./Pages/home";
import Header from "./Components/header";
import Contact from "./Pages/contact";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/student" component={Student} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
