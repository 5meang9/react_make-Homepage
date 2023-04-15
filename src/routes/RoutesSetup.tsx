import { Routes, Route } from "react-router-dom";
import Layout from './index';
import Home from "../pages/Home";




export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  )
}