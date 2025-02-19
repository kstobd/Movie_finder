import React from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>О проекте</h1>
      <section id="about-us">
        <p>
          "Movie Finder" - это веб-сайт для поиска фильмов и добавления их в
          список "Избранное" с использованием API TMDb (The Movie Database).
          Наша цель - предоставить пользователям удобный инструмент для поиска и
          организации их любимых фильмов. Проект был выполнен в рамках предмета
          "UI/UX" на 4-м курсе.
        </p>
        <h3>Использованные технологии</h3>
        <ul>
          <li>
            <strong>React</strong>: Используется для построения
            пользовательского интерфейса.
          </li>
          <li>
            <strong>React Router DOM</strong>: Для маршрутизации и навигации
            между страницами.
          </li>
          <li>
            <strong>TypeScript</strong>: Основной язык программирования для
            разработки функционала клиентской части.
          </li>
          <li>
            <strong>Vite</strong>: Инструмент для сборки и разработки проекта.
          </li>
          <li>
            <strong>CSS</strong>: Для стилизации и создания адаптивного дизайна.
          </li>
        </ul>
        <h3>Функционал</h3>
        <ul>
          <li>
            <strong>Поиск фильмов</strong>: Пользователи могут искать фильмы по
            названию, жанру и другим критериям.
          </li>
          <li>
            <strong>Просмотр информации о фильме</strong>: Детальная информация
            о каждом фильме, включая описание, рейтинг и постер.
          </li>
          <li>
            <strong>Добавление в "Избранное"</strong>: Пользователи могут
            добавлять фильмы в свой список "Избранное" для быстрого доступа в
            будущем.
          </li>
        </ul>
        <p>
          <strong>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </strong>
        </p>
      </section>
      <Button
        label={"Нажми на меня и попадешь домой"}
        onClick={() => navigate("/")}
        color={"red"}
        size={"medium"}
      ></Button>
    </div>
  );
};

export default About;
