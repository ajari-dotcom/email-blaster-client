import React, { useState } from "react";

const ContactRow = ({ contact, onSave, shouldClearOnSave=false }) => {
  const [mode, setMode] = useState(contact ? "view" : "edit");
  const getName = () => contact?.name ?? ""
  const getPhone = () => contact?.phone ?? ""
  const getEmail = () => contact?.email ?? ""

  const onEditClick = (e) => {
    e.preventDefault();
    setMode("edit");
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    setMode("view");
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const update = {
      name: formData.get("name") ?? "",
      phone: formData.get("phone") ?? "",
      email: formData.get("email") ?? "",
    };

    onSave(update);
    if (shouldClearOnSave) {
        e.target.reset()
    }
  };

  return (
    <div className="contact-row">
      <form onSubmit={onSaveClick}>
        <label htmlFor="name">
          <input
            disabled={mode === "view"}
            name="name"
            id="name"
            defaultValue={getName()}
            placeholder="Enter name"
          />
        </label>
        <label htmlFor="phone">
          <input
            disabled={mode === "view"}
            name="phone"
            id="phone"
            defaultValue={getPhone()}
            placeholder="Enter phone number"
          />
        </label>
        <label htmlFor="email">
          <input
            disabled={mode === "view"}
            name="email"
            id="email"
            defaultValue={getEmail()}
            placeholder="Enter email address"
          />
        </label>
        <button
          disabled={mode !== "view"}
          hidden={mode !== "view"}
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          disabled={mode !== "edit"}
          hidden={mode !== "edit"}
          onClick={onCancelClick}
        >
          Cancel
        </button>
        <input
          type="submit"
          value="Save!"
          disabled={mode !== "edit"}
          hidden={mode !== "edit"}
        />
      </form>
    </div>
  );
};

export default ContactRow;
