// src/pages/Home/Home.jsx
import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const Home = () => {
  const [heroData, setHeroData] = useState([]);
  const [popular, setPopular] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const tvShowsRef = useRef(null);
  const moviesRef = useRef(null);
  const popularRef = useRef(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const [heroRes, popularRes, tvRes, moviesRes, upcomingRes] =
          await Promise.all([
            axios.get(`${BASE_URL}/trending/all/week`, { params: { api_key: API_KEY } }),
            axios.get(`${BASE_URL}/tv/popular`, { params: { api_key: API_KEY } }),
            axios.get(`${BASE_URL}/tv/top_rated`, { params: { api_key: API_KEY } }),
            axios.get(`${BASE_URL}/movie/top_rated`, { params: { api_key: API_KEY } }),
            axios.get(`${BASE_URL}/movie/upcoming`, { params: { api_key: API_KEY } }),
          ]);

        setHeroData(heroRes.data.results.slice(0, 5));
        setPopular(popularRes.data.results);
        setTvShows(tvRes.data.results);
        setMovies(moviesRes.data.results);
        setUpcoming(upcomingRes.data.results);
      } catch (err) {
        console.error("TMDB fetch error:", err);
      }
    };
    fetch();
  }, []);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="home">
      <Navbar
        onScrollToTvShows={() => scrollTo(tvShowsRef)}
        onScrollToMovies={() => scrollTo(moviesRef)}
        onScrollToPopular={() => scrollTo(popularRef)}
      />

      <section className="hero-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="hero-swiper"
        >
          {heroData.map((item) => {
            const title = item.title || item.name;
            const image = item.backdrop_path || item.poster_path;
            return (
              <SwiperSlide key={item.id}>
                <div
                  className="hero"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
                  }}
                >
                  <div className="hero-overlay" />
                  <div className="hero-caption">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-desc">{(item.overview || "").slice(0, 160)}...</p>
                    <div className="hero-buttons">
                      <a className="btn play-btn" href={`/player/${item.id}`}>
                        <img src={play_icon} alt="Play" /> Play
                      </a>
                      <button className="btn info-btn">
                        <img src={info_icon} alt="Info" /> More Info
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      <main className="content">
        <div ref={popularRef}>
          <TitleCards title="Popular Shows" data={popular} />
        </div>

        <div ref={tvShowsRef}>
          <TitleCards title="TV Shows" data={tvShows} />
        </div>

        <div ref={moviesRef}>
          <TitleCards title="Movies" data={movies} />
        </div>

        <TitleCards title="Blockbuster Movies" data={movies.slice(0, 10)} />
        <TitleCards title="Upcoming" data={upcoming} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;


