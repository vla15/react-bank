import React, { Component } from 'react'

export default function Item({ id, amount, date, description }) {
  return (
    <div>
      <div>{id}</div>
      <div>{description}</div>
      <div>{amount}</div>
      <div>{date}</div>
    </div>
  )
}
