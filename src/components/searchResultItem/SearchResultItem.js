import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import "./styles.css";

const SearchResultItem = ({ item, path }) => {
  return (
    <li className="li animate__animated animate__fadeIn animate__delay-1s">
      <img
        className="li__img"
        src={item.poster_img}
        alt={`poster of ${item.title}`}
        title={item.title}
      />
      <article className="li__article">
        <h3 className="li_h3 ">
          <Link
            className="search__a transition"
            to={`${path}/preview/${item.id}`}
          >
            {item.title || item.name}
          </Link>
        </h3>
        <p className="li__p">{`${item.release_date || item.first_air_date}`}</p>
        <p className="li__p">{`${item.overview}`}</p>
      </article>
    </li>
  );
};

SearchResultItem.propTypes = {};

export default SearchResultItem;
