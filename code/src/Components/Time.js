import React, { useState } from 'react';

export const Time = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.whenNext(3);
  }
  return(
  <form onSubmit={handleSubmit}>
    <label>
      Hej jag är sida 3
      <select name="" id=""></select>
    </label>
    <button type="submit" className="sub-button">NEXT</button>
  </form>
  )
}