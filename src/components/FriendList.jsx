import React from "react";
import PropTypes from "prop-types";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item flex items-center gap-4 p-3 rounded shadow bg-white">
      <span
        className={`status inline-block w-3 h-3 rounded-full ${
          isOnline ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      <img className="avatar w-12 h-12 rounded-full" src={avatar} alt="User avatar" />
      <p className="name text-lg font-medium">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list flex flex-col gap-3 w-full max-w-sm mx-auto">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
