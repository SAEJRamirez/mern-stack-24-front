import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import Pokedex from "./pages/Pokedex.jsx";
import PokeDetails from "./components/PokeDetails.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/details/:name" element={<PokeDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
