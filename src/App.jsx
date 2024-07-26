import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import Pokedex from "./pages/Pokedex.jsx";
import PokeDetails from "./pages/PokeDetails.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";
import EditPoke from "./pages/EditPoke.jsx";
import AddPoke from "./pages/AddPoke.jsx";
import Profil from "./pages/Profil.jsx";
import Redirect from "./pages/Redirect.jsx";

function App() {

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/details/:name" element={<PokeDetails />} />
                <Route path="/edit/:name" element={<EditPoke />} />
                <Route path="/add-pokemon" element={<AddPoke />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/*" element={<Redirect />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
