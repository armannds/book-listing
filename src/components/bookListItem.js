import React from 'react';

const BookListItem = ({ title }) => (
  <div className="card">
    <div className="card-content">
      {title}
    </div>
  </div>
);

export default BookListItem;
