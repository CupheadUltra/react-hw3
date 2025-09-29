import React from "react";
import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
  // утиліта для генерації випадкового кольору
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <section className="statistics bg-white rounded-2xl shadow-md w-full max-w-md mx-auto overflow-hidden">
      {title && <h2 className="title text-center text-xl font-semibold py-4">{title}</h2>}

      <ul className="stat-list flex">
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className="item flex-1 text-center p-4 text-white"
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label block text-sm">{label}</span>
            <span className="percentage block text-lg font-medium">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
