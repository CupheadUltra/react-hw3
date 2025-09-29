import React from "react";
import PropTypes from "prop-types";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile bg-white rounded-2xl shadow-md p-6 w-full max-w-sm mx-auto">
      <div className="description text-center mb-4">
        <img
          src={avatar || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
          alt="User avatar"
          className="avatar w-24 h-24 rounded-full mx-auto object-cover"
        />
        <p className="name mt-4 text-xl font-semibold">{username}</p>
        <p className="tag text-gray-500">@{tag}</p>
        <p className="location text-gray-400">{location}</p>
      </div>

      <ul className="stats flex justify-between bg-gray-50 rounded p-3">
        <li className="flex-1 text-center">
          <span className="label block text-sm text-gray-500">Followers</span>
          <span className="quantity block text-lg font-medium">
            {stats?.followers ?? 0}
          </span>
        </li>
        <li className="flex-1 text-center">
          <span className="label block text-sm text-gray-500">Views</span>
          <span className="quantity block text-lg font-medium">
            {stats?.views ?? 0}
          </span>
        </li>
        <li className="flex-1 text-center">
          <span className="label block text-sm text-gray-500">Likes</span>
          <span className="quantity block text-lg font-medium">
            {stats?.likes ?? 0}
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    views: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    likes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

Profile.defaultProps = {
  location: "",
  avatar: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats: { followers: 0, views: 0, likes: 0 },
};
