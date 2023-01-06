import React from 'react';
import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
function QuoteDetail() {
  const param = useParams();

  return (
    <>
      <h1>Details</h1>
      <h1>{param.id}</h1>
      <Link to={`/quotes/${param.id}/comments`}>Comments</Link>
      <Route path={'/quotes/:id/comments'}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
