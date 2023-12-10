import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import Films from "../Films/Films";
import { filterMoviesFilms, filterDurationTime } from "../../utils/moviesFilter";
import * as movies from "../../utils/MoviesApi";

function SectionFilms({ handleLikeFilm, onDeleteCard, savedMovies }) {
  const [isLoading, setIsLoading] = useState(false); //загрузка прелоадер
  const [isReqError, setisReqError] = useState(false); //ошибка запроса к серверу
  const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены
  const [initialCardsMovies, setInitialCardsMovies] = useState([]); //отфильтрованные по запросу
  const [filteredMovies, setFilteredMovies] = useState([]); //отфильтрованные по запросу и чекбоксу
  const [isShortMovies, setisShortMovies] = useState(false); //включен ли чекбокс короткометражек

  //основной метод фильрации, отдает массив с фильмами на отрисовку
  function handleFilterMovie(movies, query, short) {
    const moviesCardList = filterMoviesFilms(movies, query, short); //фильтруем полученный массив по запросу
    setInitialCardsMovies(moviesCardList); //записываем в стейт
    setFilteredMovies(
      short ? filterDurationTime(moviesCardList) : moviesCardList
    ); //если чекбокс тру, то фильруем по длине и записываем в стейт
    localStorage.setItem("movies", JSON.stringify(moviesCardList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  }

  //submit
  function searchFilterMovie(query) {
    console.log(query);
    localStorage.setItem("movieSearch", query);
    localStorage.setItem("shortMovies", isShortMovies);

    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleFilterMovie(movies, query, isShortMovies);
    } else {
      setIsLoading(true);
      movies
        .getMovies()
        .then((cardsData) => {
          handleFilterMovie(cardsData, query, isShortMovies);
          setisReqError(false);
          console.log(cardsData);
        })
        .catch((err) => {
          setisReqError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleShortFilterCheckbox() {
    setisShortMovies(!isShortMovies);
    if (!isShortMovies) {
      if (filterDurationTime(initialCardsMovies).length === 0) {
        setFilteredMovies(filterDurationTime(initialCardsMovies));
      } else {
        setFilteredMovies(filterDurationTime(initialCardsMovies));
      }
    } else {
      setFilteredMovies(initialCardsMovies);
    }
    localStorage.setItem("shortMovies", !isShortMovies);
    console.log(!isShortMovies);
  }

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialCardsMovies(movies);
      if (localStorage.getItem("shortMovies") === "true") {
        setFilteredMovies(filterDurationTime(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("shortMovies") === "true") {
      console.log(setisShortMovies);
      setisShortMovies(true);
    } else {
      setisShortMovies(false);
      console.log(setisShortMovies);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <section className="section-films">
      <Search
        onfilterMoviesFilms={handleShortFilterCheckbox}
        searchFilterMovie={searchFilterMovie}
        isShortMovies={isShortMovies}
      />
      <Films
        cards={filteredMovies}
        isLoading={isLoading}
        handleLikeFilm={handleLikeFilm}
        onDeleteCard={onDeleteCard}
        isSavedFilms={false}
        isReqError={isReqError}
        isNotFound={isNotFound}
        savedMovies={savedMovies}
      />
    </section>
  );
}

export default SectionFilms;
