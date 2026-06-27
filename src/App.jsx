import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ProjMovies from "./components/ProjMovies";
import ProjNetflix from "./components/ProjNetflix";
import ProjSpotify from "./components/ProjSpotify";
import ProjLibrary from "./components/ProjLibrary";


const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Header />} />;
                <Route path="/projects" element={<Projects />} />;
                <Route path="/movies" element={<ProjMovies />} />;
                <Route path="/netflix" element={<ProjNetflix />} />;
                <Route path="/spotify" element={<ProjSpotify />} />;
                <Route path="/library" element={<ProjLibrary />} />;
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
