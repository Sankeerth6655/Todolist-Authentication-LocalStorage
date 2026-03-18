import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

function App(){
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}
export default App;