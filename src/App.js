import React, { Component } from 'react';
import BookList from './containers/bookList';

const App = () => (
  <div className="columns">
    <div className="column is-one-third">
      <BookList />
    </div>
  </div>
);

export default App;
