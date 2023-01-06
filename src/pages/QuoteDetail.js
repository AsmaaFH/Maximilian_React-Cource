import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import QuoteItem from '../components/quotes/QuoteItem';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
function QuoteDetail() {
  const param = useParams();

  const DUMMY = [
    { id: '1', author: 'author1', text: 'Twxt1' },
    { id: '2', author: 'author2', text: 'Text2' },
  ];

  let quote = DUMMY.find((quote) => quote.id == param.id);

  if (!quote) {
    return <p>No Quotes Found!</p>;
  }

  return (
    <>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <h1>{param.id}</h1>
      <Route path={'/quotes/:id/comments'}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
