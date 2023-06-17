import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './index';
import Home from "../pages/Home";
import Bespoke from "../pages/Bespoke";
import HomePage from "../pages";
import BespokeDesc from "../pages/BespokeDesc/BespokeDesc";




export default function RoutesSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path={"/bespoke"} element={<Bespoke/>}></Route>
        <Route path={"/bespoke_desc"} element={<BespokeDesc/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}