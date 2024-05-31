import React, { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ onAddFriend, handleShowAddFriend }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();

    if(!name || !img) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: img + "?=" + id,
      balance: 0,
    };
    onAddFriend(newFriend);
    handleShowAddFriend();
    setName("");
    setImg("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>👲 Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;
