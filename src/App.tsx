import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Home from "@pages/Home";
import NavBar from "@components/layout/NavBar";
import Footer from "@components/layout/Footer";
import SpeedReading from "@components/features/projects/SpeedReading";
import FlappyBirdNetwork from "@components/features/projects/FlappyBirdNetwork";
import Project from "@pages/Project";

function App() {
    return (
        <>
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    
                    <Route path="/projects/flappy-bird-network" element={<Project content={<FlappyBirdNetwork />} />} />
                    <Route path="/projects/speed-reading" element={<Project content={<SpeedReading />} />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
