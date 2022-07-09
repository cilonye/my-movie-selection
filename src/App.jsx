import React, { useState } from "react";
import CardList from "./components/CardList";
import { myList, recommendations } from "./data";
import "./index.css";
import "tachyons";

const App = () => {
  const [myMovieArray, setMyMovieArray] = useState(myList);
  const [movieArray, setMovieArray] = useState(recommendations);

  const handleClick = (event) => {
    const targetMovieArray = event.target.id.split(" ");
    const targetMovie = targetMovieArray.pop();

    if (event.target.id.includes("myList")) {
      const newMovie = myMovieArray.filter(
        (myMovieArray) => !myMovieArray.title.includes(targetMovie)
      );

      const removedMovie = myMovieArray.filter((myMovieArray) =>
        myMovieArray.title.includes(targetMovie)
      );

      setMyMovieArray(newMovie);
      setMovieArray([...movieArray, removedMovie.pop()]);
    } else{
      console.log(targetMovie);
      const newMovie = movieArray.filter(
        (movieArray) => !movieArray.title.includes(targetMovie)
      );
      const removedMovie = movieArray.filter((movieArray) =>
        movieArray.title.includes(targetMovie)
      );

      console.log(removedMovie);
      console.log(newMovie);

      setMovieArray(newMovie);
      setMyMovieArray([...myMovieArray, removedMovie.pop()]);
    }
  };

  return (
    <div>
      <h1>My Lists</h1>
      <CardList
        myList={myMovieArray}
        category="myList"
        onButtonClick={handleClick}
      />
      <h1>My Recommendations</h1>
      <CardList
        myList={movieArray}
        category="recommendations"
        onButtonClick={handleClick}
      />
    </div>
  );
};

export default App;
