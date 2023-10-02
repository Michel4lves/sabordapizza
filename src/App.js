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
import { useState } from "react";

export default function App() {

    const pizzaCart = {
        "products": []
    }

    if (!sessionStorage.hasOwnProperty('pizzaCart')) {
        sessionStorage.setItem('pizzaCart', JSON.stringify(pizzaCart))
    }

    const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart')).products
    const productsCount = localPizzaCart.reduce((accumulator, item) => accumulator + item.quantity, 0)
    const [count, setCount] = useState(productsCount)
    const [discounted, setDiscounted] = useState(0.00)


    function addMenuCount(unit) {
        setCount((count) => count + unit)
    }


    function addDiscount(discount) {
        setDiscounted(discount)
    }


    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <header className="header">
                    <NavMenu counted={count} />
                </header>
                <Container>
                    <Routes>
                        <Route path='sabordapizza/' element={<Home />} />
                        <Route path='sabordapizza/cardapio' element={<Cardapio onAddMenuCount={addMenuCount} />} />
                        <Route path='sabordapizza/delivery' element={<Delivery />} />
                        <Route path='sabordapizza/contact' element={<Contact />} />
                        <Route path='sabordapizza/cart' element={<Cart onAddMenuCount={addMenuCount} onDiscount={addDiscount} />} />
                        <Route path='sabordapizza/checkout' element={<Checkout discount={discounted} />} />
                    </Routes>
                </Container>
                <footer className="footer">
                    <Footer />
                </footer>
                </BrowserRouter>
        </div>
    );
}