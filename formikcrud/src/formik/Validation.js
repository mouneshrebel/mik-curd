import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Forms from './Forms';
import FormSubmission from './FormSubmission';
import './Validation.css';

const Validation = () => {
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
  });

  const addAuthor = (newAuthor) => {
    const updatedAuthor = { ...newAuthor, id: authors.length  };
    setAuthors((prevAuthors) => [...prevAuthors, updatedAuthor]);
    setFormData({
      name: '',
      age: '',
      city: '',
    });
  };

  const deleteAuthor = (id) => {
    setAuthors((prevAuthor) => prevAuthor.filter((author) => author.id !== id));
  };

  const editAuthor = (id, updatedAuthor) => {
    setAuthors((prevAuthor) =>
      prevAuthor.map((author) => (author.id === id ? updatedAuthor : author))
    );
  };

  return (
    <div  className="container">
      <h2 className='main'>Admin Dashboard</h2>
      <div className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Forms
        </NavLink>
        <NavLink to="/tables" className="nav-link" activeClassName="active">
          List
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Forms addAuthor={addAuthor} />} />
        <Route
          path="/tables"
          element={
            <FormSubmission
              data={authors}
              deleteAuthor={deleteAuthor}
              editAuthor={editAuthor}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Validation;
