import React, { useState, useEffect } from "react";
import ListItems from "./ListItems";
import AddButton from "./AddButton";
const Body = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    const response = await fetch(`http://localhost:3000/notes`);
    const data = await response.json();
    setNotes(data);
  };

  return (
    <>
      <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title">&#9782; Notes</h2>
          <p className="notes-count">{notes?.length}</p>
        </div>
        <div className="notes-list">
          {notes?.map((note, index) => (
            <ListItems key={index} note={note} />
          ))}
        </div>
        <AddButton />
      </div>
    </>
  );
};

export default Body;
