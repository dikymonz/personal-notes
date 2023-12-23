import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      <FontAwesomeIcon icon={faBoxArchive} /> Arsipkan
    </button>
  );
}

export default ArchiveButton;
