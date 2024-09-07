import React, { useState } from 'react';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const handleAddAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <h2>Add Book</h2>
      <BookForm initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }} onSubmit={handleAddBook} />
      <h2>Add Author</h2>
      <AuthorForm initialValues={{ name: '', birthDate: '', biography: '' }} onSubmit={handleAddAuthor} />
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
      <h2>Authors</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
