import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/searchBar';
import BookList from '../../components/BookList/BookList';
import './HomePage.css';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = ({ title, author, subject }) => {
    let query = 'https://openlibrary.org/search.json?';
    if (title) query += `title=${title}&`;
    if (author) query += `author=${author}&`;
    if (subject) query += `subject=${subject}&`;

    fetch(query)
      .then(response => response.json())
      .then(data => setBooks(data.docs));
  };

  return (
    <div className="home-page">
      <h1>Welcome to the Library</h1>
      <p className="tagline">"A room without books is like a body without a soul."</p>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default HomePage
