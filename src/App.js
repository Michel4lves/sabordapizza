import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import NavMenu from "./components/navbar/NavMenu";
import Container from "./components/container/Container";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./config/ScrollToTop";
import PizzaCart from "./config/PizzaCart";
import { useState } from "react";


export default function App() {

    const [countNumber, setCountNumber] = useState(0)

    function countProducts(count) {
        setCountNumber(count)
    }



    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <PizzaCart />
                <header className="header">
                    <NavMenu productsCounted={countNumber} />
                </header>
                <Container>
                    <Routes>
                        <Route path='sabordapizza/' element={<Home />} />
                        <Route path='sabordapizza/cardapio' element={<Cardapio />} />
                        <Route path='sabordapizza/delivery' element={<Delivery />} />
                        <Route path='sabordapizza/contact' element={<Contact />} />
                        <Route path='sabordapizza/cart' element={<Cart onProductsCount={countProducts} />} />
                        <Route path='sabordapizza/checkout' element={<Checkout />} />
                    </Routes>
                </Container>
                <footer className="footer">
                    <Footer />
                </footer>
                </BrowserRouter>
        </div>
    );
}