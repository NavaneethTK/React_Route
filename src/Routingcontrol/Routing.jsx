import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Jewelery from "../Pages/Jewelery";
import Electonic from "../Pages/Electronic";
import MensClothing from "../Pages/MensClothing";
import WomenClothing from "../Pages/WomenClothing";
import Details from "../Reuseable/Details";

function PageRout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electonic />} />
        <Route path="/mensclothing" element={<MensClothing />} />
        <Route path="/womenscloting" element={<WomenClothing />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default PageRout;
