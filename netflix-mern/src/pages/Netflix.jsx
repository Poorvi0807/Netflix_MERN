import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from "../assets/home.jpg";
import styled from "styled-components";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

// import { onAuthStateChanged } from "firebase/auth";
// import { firebaseAuth } from "../utils/firebase-config";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchMovies, getGenres } from "../store";

import Slider from "../components/Slider";

export default function Netflix() {
  
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll=()=>{
      setIsScrolled(window.pageYOffset === 0 ? false: true);
      return () => (window.onscroll = null );

  };
  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <img />
      </div>
    </div>
  )
}

