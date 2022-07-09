import React from "react";

const Buttons = ({ title, category, buttonEvent }) => {
  // click a button
  // move the movie that has the button from its array into another array
  // find the array of the movie that has the button
  // movie it to the other array

  return (
    <button
      onClick={buttonEvent}
      className="button"
      id={`${category} ${title}`}
    >
      {category === "myList" ? "Remove" : "Add"}
    </button>
  );
};

export default Buttons;
