import React from "react";

const MyList = ({ items }) => {
  return (
    <div>
      <h2>My List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
