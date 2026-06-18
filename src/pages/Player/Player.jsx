// src/pages/Player/Player.jsx
import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchTrailer = async () => {
      setLoading(true);
      try {
        let res = await axios.get(`${BASE_URL}/movie/${id}/videos`, { params: { api_key: API_KEY } });
        if (!res.data.results || res.data.results.length === 0) {
          res = await axios.get(`${BASE_URL}/tv/${id}/videos`, { params: { api_key: API_KEY } });
        }

        const trailer = res.data.results?.find(v => v.type === "Trailer" && v.site === "YouTube");
        setVideoKey(trailer ? trailer.key : null);

        // details
        const details = await axios.get(`${BASE_URL}/movie/${id}`, { params: { api_key: API_KEY } })
          .catch(() => axios.get(`${BASE_URL}/tv/${id}`, { params: { api_key: API_KEY } }));
        setTitle(details.data.title || details.data.name || "");
      } catch (err) {
        console.error("Player fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrailer();
  }, [id]);

  return (
    <div className="player">
      <img className="player-back-arrow" src={back_arrow} alt="Back" onClick={() => navigate(-1)} />

      {loading && <div className="loader" />}

      {videoKey ? (
        <div className={`iframe-container ${loading ? "" : "loaded"}`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            onLoad={() => {}}
          />
        </div>
      ) : (
        !loading && <div className="no-trailer">Sorry — trailer not available.</div>
      )}
    </div>
  );
};

export default Player;



