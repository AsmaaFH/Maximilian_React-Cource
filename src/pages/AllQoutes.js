import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQoutes = () => {
  return (
    <QuoteList
      quotes={[
        { id: '1', author: 'author1', text: 'GText' },
        { id: '2', author: 'suthor2', text: 'AText' },
        { id: '3', author: 'zuthor2', text: 'SText' },
        { id: '4', author: 'buthor2', text: 'SText' },
      ]}
    />
  );
};

export default AllQoutes;
