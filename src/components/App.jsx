import { Routes, Route } from "react-router-dom";
import { Home } from './HomePage/Home';
import axios from 'axios';
import styled from 'styled-components'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
