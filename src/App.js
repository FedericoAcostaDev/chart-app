import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PageOne from "./pages/PageOne/PageOne";
import PageTwo from "./pages/PageTwo/PageTwo";
import PageThree from "./pages/PageThree/PageThree";

import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/page-one">
          <PageOne />
        </Route>
        <Route path="/page-two">
          <PageTwo />
        </Route>
        <Route path="/page-three">
          <PageThree />
        </Route>
        <Route path="/page-four" component={Dashboard}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
