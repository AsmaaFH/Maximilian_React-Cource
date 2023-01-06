import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQoutes = () => {
  return (
    <QuoteList
      quotes={[
        { id: '1', author: 'author1', text: 'Twxt1' },
        { id: '2', author: 'author2', text: 'Text2' },
      ]}
    />
  );
};

export default AllQoutes;
