import { SendTwoTone } from "@mui/icons-material";
import React from "react";
import { useState } from "react";

function CreateArea() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea name="content" rows="3" placeholder="Take a note..." />
      </form>
    </div>
  );
}

export default CreateArea;
