import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://openlibrary.org${id}.json`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={`http://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`} alt={book.title} />
      <p><strong>Author(s):</strong> {book.authors && book.authors.map(author => author.name).join(', ')}</p>
      <p><strong>Publisher:</strong> {book.publishers && book.publishers[0].name}</p>
      <p><strong>Published Date:</strong> {book.publish_date}</p>
      <p><strong>ISBN:</strong> {book.isbn_10 && book.isbn_10[0]}</p>
      <p><strong>Pages:</strong> {book.number_of_pages}</p>
    </div>
  );
};

export default BookDetails;
