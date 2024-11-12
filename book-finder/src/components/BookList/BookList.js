import React from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.key} className="book-item">
          <Link to={`/book/${book.key}`}>
            <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
