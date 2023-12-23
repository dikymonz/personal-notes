import React from "react";
import NoteSearch from "./NoteSearch";
import { BsJournals } from "react-icons/bs";
function Header({ searchNote }) {
  return (
    <div className="note-app__header">
      <BsJournals size={35} className="icon" />
      <h1>Personal Notes</h1>
      <NoteSearch searchNote={searchNote} />
    </div>
  );
}

export default Header;
