import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
function QuoteDetail() {
  const param = useParams();

  const DUMMY = [
    { id: '1', author: 'author1', text: 'GText' },
    { id: '2', author: 'suthor2', text: 'AText' },
    { id: '3', author: 'zuthor2', text: 'SText' },
    { id: '4', author: 'buthor2', text: 'SText' },
  ];

  let quote = DUMMY.find((quote) => quote.id === param.id);

  if (!quote) {
    return <p>No Quotes Found!</p>;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${quote.id}`} exact>
        <div className="centered">
          <Link to={`/quotes/${quote.id}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <h1>{param.id}</h1>
      <Route path={'/quotes/:id/comments'}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
