import React, { useState } from "react";
import "./FormSubmission.css";

const FormSubmission = ({ data, deleteAuthor, editAuthor }) => {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    name: "",
    age: "",
    city: "",
  });

  const handleEdit = (author) => {
    setEditMode(true);
    setEditData(author);
  };

  const handleSave = () => {
    editAuthor(editData.id, editData);
    setEditMode(false);
    setEditData({ id: "", name: "", age: "", city: "" });
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditData({ id: "", name: "", age: "", city: "" });
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setEditData((prevData) => {
      if (prevData.id === id) {
        return {
          ...prevData,
          [name]: value,
        };
      }
      return prevData;
    });
  };

  return (
    <div>
      <h2>Authors List</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id }>
                <td>{item.id + 1}</td>
                <td>
                  {editMode && editData.id === item.id ? (
                    <input
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editMode && editData.id === item.id ? (
                    <input
                      type="text"
                      name="age"
                      value={editData.age}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  ) : (
                    item.age
                  )}
                </td>
                <td>
                  {editMode && editData.id === item.id ? (
                    <input
                      type="text"
                      name="city"
                      value={editData.city}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  ) : (
                    item.city
                  )}
                </td>
                <td>
                  {!editMode && (
                    <>
                      <button onClick={() => handleEdit(item)}>Edit</button>{" "}
                      <button onClick={() => deleteAuthor(item.id)}>
                        Delete
                      </button>
                    </>
                  )}
                  {editMode && editData.id === item.id && (
                    <>
                      <button onClick={handleSave}>Save</button>{" "}
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormSubmission;
