import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

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
                        <Route path='sabordapizza/' element={<Home />} />
                        <Route path='sabordapizza/cardapio' element={<Cardapio />} />
                        <Route path='sabordapizza/delivery' element={<Delivery />} />
                        <Route path='sabordapizza/contact' element={<Contact />} />
                        <Route path='sabordapizza/cart' element={<Cart />} />
                    </Routes>
                </Container>
                <footer className="footer">
                    <Footer />
                </footer>
                </BrowserRouter>
        </div>
    );
}