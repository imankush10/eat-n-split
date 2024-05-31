  import React from "react";
  import Button from "./Button";

  const FriendList = ({ friends, selected, handleSelect }) => {
    return (
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            selected={selected}
            handleSelect={handleSelect}
            key={friend.id}
          />
        ))}
      </ul>
    );
  };
  function Friend({ friend, selected, handleSelect }) {
    return (
      <li className={selected?.id === friend.id ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {friend.balance}
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => handleSelect(friend)}>Select</Button>
      </li>
    );
  }

  export default FriendList;
