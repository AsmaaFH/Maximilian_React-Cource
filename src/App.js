import { Route, Redirect } from 'react-router-dom';
import AllQoutes from './pages/AllQoutes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
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

      <Route path={''}></Route>
    </div>
  );
}

export default App;
