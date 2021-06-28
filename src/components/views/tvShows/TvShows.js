import React from "react";
// import PropTypes from "prop-types";
import useDataTvSeries from "../../../utils/hooks/useDataTvSeries";
import MovieGridItem from "../../MovieGridItem";

const TvShows = () => {
  const dataTvSeries = useDataTvSeries();
  return (
    <>
      <h2>teve shows</h2>
      <ul className="card__grid">
        {dataTvSeries.map((movie) => (
          <MovieGridItem key={movie.id} {...movie} />
        ))}
      </ul>
    </>
  );
};

TvShows.propTypes = {};

export default TvShows;