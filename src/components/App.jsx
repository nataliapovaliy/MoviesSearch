import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
      <div>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          
          <Route path='movies' element={< MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>

          <Route path="*" element={<HomePage />} />
          
        </Route>  
      </Routes>
      </div>
  );
};
