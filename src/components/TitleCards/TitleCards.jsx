// src/components/TitleCards/TitleCards.jsx
import React from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title = "Popular Shows", data = [] }) => {
  return (
    <section className="title-cards">
      <div className="title-header">
        <h2>{title}</h2>
      </div>

      <div className="card-list">
        {data && data.length > 0 ? (
          data.map((item) => {
            const name = item.title || item.name;
            const poster = item.poster_path || item.backdrop_path;
            return (
              <Link key={item.id} to={`/player/${item.id}`} className="card">
                <div className="poster-wrap">
                  <img
                    src={`https://image.tmdb.org/t/p/w342${poster}`}
                    alt={name}
                    loading="lazy"
                  />
                </div>
                <p className="card-title">{name}</p>
              </Link>
            );
          })
        ) : (
          <div className="no-data">No items to display</div>
        )}
      </div>
    </section>
  );
};

export default TitleCards;


