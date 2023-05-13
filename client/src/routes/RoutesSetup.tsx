import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './index';
import Home from "../pages/Home";
import Bespoke from "../pages/Bespoke";
import HomePage from "../pages";




export default function RoutesSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path={"/bespoke"} element={<Bespoke/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}