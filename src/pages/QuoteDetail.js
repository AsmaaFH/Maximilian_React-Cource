import React, { useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
function QuoteDetail() {
  const param = useParams();
  const match = useRouteMatch();

  const { id } = param;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  console.log(loadedQuote);
  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (!loadedQuote) {
    return <p>No Quotes Found!</p>;
  }

  return (
    <>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>

      <h1>{param.id}</h1>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
