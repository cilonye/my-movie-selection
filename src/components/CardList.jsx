import React from "react";
import Card from "./Card";

const CardList = ({ myList, category, onButtonClick, getButton }) => {
  return (
    <div>
      {myList.map((myList) => {
        return (
          <Card
            key={myList.id}
            title={myList.title}
            img={myList.img}
            category={category}
            buttonEvent={onButtonClick}
          />
        );
      })}
    </div>
  );
};

export default CardList;
