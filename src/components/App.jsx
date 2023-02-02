import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage/HomePage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
// import styled from "styled-components";

export const App = () => {

  // const Header=styled.header`
  //   height: 200px;
  //   display: flex;
  //   flex-direction: row;
  //   gap: 10px;
  //   margin-bottom: 10px;
  // `

  return (
    <div>
      <Routes>

        <Route path="/" element={<Layout />} >
          
          {/* <Header> */}
          <Route index element={<HomePage />} />
          
          <Route path='movies' element={< MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          {/* </Header> */}
          <Route path="*" element={<HomePage />} />
          
        </Route>  
      </Routes>
    </div>
  );
};
