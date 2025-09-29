import React from "react";
import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history w-full max-w-2xl mx-auto border-collapse shadow-md rounded overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-3 text-left">Type</th>
          <th className="p-3 text-left">Amount</th>
          <th className="p-3 text-left">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className="odd:bg-white even:bg-gray-50">
            <td className="p-3 capitalize">{type}</td>
            <td className="p-3">{amount}</td>
            <td className="p-3">{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
