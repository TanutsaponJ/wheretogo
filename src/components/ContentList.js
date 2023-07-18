import React from "react";

function ContentList({ num, name, img, position, information }) {
  return (
    <div className='content-list'>
      <div className='content-box'>
        <h2>{num < 20 ? `#${num + 1}` : ""}</h2>
        <h3>{name}</h3>
        <img src={img} alt={name} />
        <h5>{position}</h5>
      </div>
      <div className='content-text'>{information}</div>
    </div>
  );
}

export default ContentList;
