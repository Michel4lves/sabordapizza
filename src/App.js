import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import NavMenu from "./components/navbar/NavMenu";
import Container from "./components/container/Container";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./config/ScrollToTop";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <header className="header">
                    <NavMenu />
                </header>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='delivery' element={<Delivery />} />
                        <Route path='contact' element={<Contact />} />
                    </Routes>
                </Container>
                <footer className="footer">
                    <Footer />
                </footer>
                </BrowserRouter>
        </div>
    );
}