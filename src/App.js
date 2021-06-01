import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import NewQuotes from "./Pages/NewQuotes";
import NotFound from "./Pages/NotFound";
import QuotesDetails from "./Pages/QuotesDetails";


function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'></Redirect>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes></AllQuotes>
      </Route>      
      <Route path='/quotes/:quoteId'>
        <QuotesDetails></QuotesDetails>
      </Route>
      <Route path='/new-quotes'>
        <NewQuotes></NewQuotes>
      </Route>
      <Route path='*'>
        <NotFound/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
