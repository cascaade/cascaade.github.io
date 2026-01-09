import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "@pages/Home";
import NavBar from "@components/layout/NavBar";
import Footer from "@components/layout/Footer";
import SpeedReading from "@components/features/projects/SpeedReading";
import FlappyBirdNetwork from "@components/features/projects/FlappyBirdNetwork";
import Project from "@pages/Project";
import NotFound from "@pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/projects" element={<Home />} />
                
                <Route path="/projects/flappy-bird-network" element={<Project content={<FlappyBirdNetwork />} title={"flappy bird"} date={"5/5/5"} banner={""}/>} />
                <Route path="/projects/speed-reading" element={<Project content={<SpeedReading />} title={"speedreading"} date={"6/6/6"} banner={"7382"} />} />
                
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
