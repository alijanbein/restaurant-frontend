import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import { AnimatePresence } from "framer-motion";
import MenuPage from "../pages/menuPage";
import Load from "./Load";
import Test from "../pages/Test";
// import MenuPage from "../pages/MenuPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu/:id" element={<MenuPage />} />
        <Route exact path="/load" element={<Load />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
