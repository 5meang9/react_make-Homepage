import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesSetup from './routes/RoutesSetup';



export default function App() {
  return (
    <BrowserRouter >
      <RoutesSetup />
    </BrowserRouter>
  );
}

