import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage/HomePage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
// import { lazy, Suspense } from "react";

// const Cast = lazy(() => import("./Cast/Cast"));

export const App = () => {

  return (
    // <Suspense fallback={<div>Loading...</div>}>
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
      // </Suspense>
  );
};
