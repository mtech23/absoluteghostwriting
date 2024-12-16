import { useState } from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './App.css'
import "./assets/css/media.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppRouter from './router/Router'

function App() {
  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
