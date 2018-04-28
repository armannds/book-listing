import React from 'react';
import { connect } from 'react-redux';

function BookDetail() {
  if (!this.props.book) {
    return <div>Select a book to get started.</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <div>Title: {this.props.book.title}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
