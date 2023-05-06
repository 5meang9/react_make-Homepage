import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Home from "../pages/Home";

export default function Layout(){
  return (
    <>
      <NavigationBar />
      <Home />
      <Outlet />
      <Footer />
    </>
  )
}