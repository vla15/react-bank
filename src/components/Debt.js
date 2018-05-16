import React from 'react';
import PropTypes from 'prop-types';

export default function Debt({id, amount, date, description}) {
  return (
    <div>
      <div>{id}</div>
      <div>{description}</div>
      <div>{amount}</div>
      <div>{date}</div>
    </div>
  );
}