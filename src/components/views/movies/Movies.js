import React from "react";
// import PropTypes from "prop-types";

import useDataMovie from "../../../utils/hooks/useDataMovie";

import DataGridItem from "../../DataGridItem";

const Movies = () => {
  const dataMovie = useDataMovie();

  return (
    <main>
      <h2 className="capitalize center px animate__animated animate__fadeIn">
        trending movies
      </h2>
      <div className="card__grid animate__animated animate__fadeIn animate__delay-1s">
        {dataMovie.map((movie) => (
          <DataGridItem key={movie.id} path={"movie"} {...movie} />
        ))}
      </div>
    </main>
  );
};

Movies.propTypes = {};

export default Movies;
