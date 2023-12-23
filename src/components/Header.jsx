import React from "react";
import NoteSearch from "./NoteSearch";
import { BsBookHalf } from "react-icons/bs";
function Header({ searchNote }) {
  return (
    <div className="note-app__header">
      <h1>
        <BsBookHalf />
        Personal Notes
      </h1>
      <NoteSearch searchNote={searchNote} />
    </div>
  );
}

export default Header;
