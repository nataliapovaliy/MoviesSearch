import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage/HomePage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { MovieSubPage } from "pages/MovieSubPage/MovieSubPage";

// import styled from 'styled-components'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='movies' element={< MoviesPage />}>
            <Route path=":movieId" element={<MovieSubPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
