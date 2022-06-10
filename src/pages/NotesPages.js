/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotesPages = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const [note, setNote] = useState(null);

  const getData = async (id) => {
    if (id === "new") return;
    const res = await fetch(`http://localhost:3000/notes/${id}`);
    const data = await res.json();
    setNote(data);
  };

  const updateNote = async () => {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };

  const deleteNote = async () => {
    await fetch("http://localhost:3000/notes/" + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(note),
    });
    history.push("/");
  };

  const addNote = async () => {
    await fetch(`http://localhost:3000/notes/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
    history.push("/");
  };

  const handleSubmit = () => {
    updateNote();
    history.push("/");
  };
  useEffect(() => {
    getData(id);
  }, [id]);
  // const { body } = notes.find((note) => note.id.toString() === id) || {};
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={`/`}>
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete </button>
        ) : (
          <button onClick={addNote}>Done</button>
        )}
      </div>
      <textarea
        value={note?.body}
        onChange={(e) => setNote({ ...note, body: e.target.value })}
      ></textarea>
    </div>
  );
};

NotesPages.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
export default NotesPages;
