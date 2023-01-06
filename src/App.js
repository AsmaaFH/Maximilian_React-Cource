import { Route, Redirect, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQoutes from './pages/AllQoutes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path={'/'} exact>
            <Redirect to={'/quotes'} />
          </Route>
          <Route path={'/quotes'} exact>
            <AllQoutes />
          </Route>
          <Route path={'/quotes/:id'}>
            <QuoteDetail />
          </Route>
          <Route path={'/new-quote'}>
            <NewQuote />
          </Route>
          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
