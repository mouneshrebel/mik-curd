
// import React, { useState } from 'react';
// import './Forms.css';

// const Forms = ({ addAuthor }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     city: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((data) => ({
//       ...data,
//       [name]: value,
//     }));
//   };

//   const formHandle = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.age || !formData.city) {
//       alert('Please fill out this form!!!');
//       return;
//     }

//     const newData = { ...formData };
//     addAuthor(newData);

//     setFormData({
//       name: '',
//       age: '',
//       city: '',
//     });
//   };

//   return (
//     <div className="input-container">
//       <h2>Add Author</h2>
//       <form onSubmit={formHandle}>
//         <label>Title</label>
//         <input
//           type="text"
//           value={formData.name}
//           name="name"
//           onChange={handleChange}
//         />
//         <br />
//         <label>Author</label>
//         <input
//           type="text"
//           value={formData.age}
//           name="age"
//           onChange={handleChange}
//         />
//         <br />
//         <label>Content</label>
//         <input
//           type="text"
//           value={formData.city}
//           name="city"
//           onChange={handleChange}
//         />
//         <br /><br/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Forms;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Forms.css';

const Forms = ({ addAuthor }) => {
  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    if (!values.age) {
      errors.age = 'Age is required';
    }

    if (!values.city) {
      errors.city = 'City is required';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!values.name || !values.age || !values.city) {
      alert('Please fill out this form!!!');
      return;
    }

    addAuthor(values);
    resetForm();
  };

  return (
    <div className="input-container">
      <h2>Add Author</h2>
      <Formik
        initialValues={{ name: '', age: '', city: '' }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        <Form>
          <label>Title</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error-message" />
          <br />

          <label>Author</label>
          <Field type="text" name="age" />
          <ErrorMessage name="age" component="div" className="error-message" />
          <br />

          <label>Content</label>
          <Field type="text" name="city" />
          <ErrorMessage name="city" component="div" className="error-message" />
          <br /><br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Forms;
