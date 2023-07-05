import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Delivery from "./pages/Delivery";
import Contato from "./pages/Contato";
import NavMenu from "./components/navbar/NavMenu";
import Container from "./components/container/Container";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header className="header">
                    <NavMenu />
                </header>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='delivery' element={<Delivery />} />
                        <Route path='contato' element={<Contato />} />
                    </Routes>
                </Container>
                </BrowserRouter>
        </div>
    );
}