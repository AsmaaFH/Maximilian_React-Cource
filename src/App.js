import { Route, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQoutes from './pages/AllQoutes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
