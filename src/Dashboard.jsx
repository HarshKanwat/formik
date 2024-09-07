import React, { useState } from 'react';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBookIndex, setEditingBookIndex] = useState(null);
  const [editingAuthorIndex, setEditingAuthorIndex] = useState(null);

  const handleAddBook = (book) => {
    if (editingBookIndex !== null) {
      const updatedBooks = books.map((b, index) => (index === editingBookIndex ? book : b));
      setBooks(updatedBooks);
      setEditingBookIndex(null);
    } else {
      setBooks([...books, book]);
    }
  };

  const handleAddAuthor = (author) => {
    if (editingAuthorIndex !== null) {
      const updatedAuthors = authors.map((a, index) => (index === editingAuthorIndex ? author : a));
      setAuthors(updatedAuthors);
      setEditingAuthorIndex(null);
    } else {
      setAuthors([...authors, author]);
    }
  };

  const handleEditBook = (index) => {
    setEditingBookIndex(index);
  };

  const handleEditAuthor = (index) => {
    setEditingAuthorIndex(index);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const handleDeleteAuthor = (index) => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  return (
    <div className="container">
      <h1>Library Management Dashboard</h1>
      <h2>{editingBookIndex !== null ? 'Edit Book' : 'Add Book'}</h2>
      <BookForm
        initialValues={editingBookIndex !== null ? books[editingBookIndex] : { title: '', author: '', isbn: '', publicationDate: '' }}
        onSubmit={handleAddBook}
      />
      <h2>{editingAuthorIndex !== null ? 'Edit Author' : 'Add Author'}</h2>
      <AuthorForm
        initialValues={editingAuthorIndex !== null ? authors[editingAuthorIndex] : { name: '', birthDate: '', biography: '' }}
        onSubmit={handleAddAuthor}
      />
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            <div>
              <button onClick={() => handleEditBook(index)}>Edit</button>
              <button onClick={() => handleDeleteBook(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Authors</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            {author.name}
            <div>
              <button onClick={() => handleEditAuthor(index)}>Edit</button>
              <button onClick={() => handleDeleteAuthor(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;