import React, { useState } from "react";
import Buttons from "./Buttons";

const Card = ({ title, img, category, buttonEvent, getButton }) => {
  const [isMouseInside, setIsMouseInside] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"
    >
      <img alt="movie" src={img} />
      <div>
        {isMouseInside && (
          <Buttons
            buttonEvent={buttonEvent}
            title={title}
            category={category}
          />
        )}
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
