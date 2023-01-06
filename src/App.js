import { Route } from 'react-router-dom';
import AllQoutes from './pages/AllQoutes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <div>
      <Route path={'/quotes'} exact>
        <AllQoutes />
      </Route>
      <Route path={'/quotes/:quoteId'}>
        <QuoteDetail />
      </Route>
      <Route path={'/new-quote'}>
        <NewQuote />
      </Route>
      <Route path={''}></Route>
      <Route path={''}></Route>
    </div>
  );
}

export default App;
