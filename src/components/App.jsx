import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import FriendList from "./FriendList";
import SplitBillForm from "./SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleShowAddFriend() {
    setSelected(null);
    setShowAddFriend((prev) => !prev);
  }
  function handleAddFriend(newFriend) {
    setFriends((current) => [...current, newFriend]);
  }
  function handleSelect(friend) {
    setShowAddFriend(false);
    selected?.id === friend.id ? setSelected(null) : setSelected(friend);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          handleSelect={handleSelect}
          selected={selected}
        />
        {showAddFriend && (
          <AddFriendForm
            onAddFriend={handleAddFriend}
            handleShowAddFriend={handleShowAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selected && (
        <SplitBillForm
          selected={selected}
          handleSplitBill={handleSplitBill}
          handleSelect={handleSelect}
          key={select.id}
        />
      )}
    </div>
  );
};

export default App;
