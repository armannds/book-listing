import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookListItem from '../components/bookListItem';

class Booklist extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title}>
        <BookListItem title={book.title} />
      </li>
    ));
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(Booklist);
