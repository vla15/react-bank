import React from 'react';
import PropTypes from 'prop-types';

export default function Credit({id, description, amount, date}) {
  return (
    <div>
      <div>{id}</div>
      <div>{description}</div>
      <div>{amount}</div>
      <div>{date}</div>
    </div>
  );
}