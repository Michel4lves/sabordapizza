import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../sass/components/navbar/NavBar.sass"
import "../../sass/components/navbar/NavMenu.sass"

import logo from "../../img/logo.png"


export default function NavMenu() {
    
const location = useLocation()
const [title, setTitle] = useState("null")

const handleTitle = (titleId) => {
    setTitle(titleId)
}

useEffect(() => {
    const saborDaPizza = document.querySelector("#saborDaPizza")
    const promocoes = document.querySelector("#promocoes")
    if (title === "saborDaPizza") {
        saborDaPizza.scrollIntoView({ behavior: "smooth" })
    }else if (title === "promocoes") {
        promocoes.scrollIntoView({ behavior: "smooth", padding: "130px" })
    }
}, [location.pathname, title])


    return (
        <nav className="navbar">
            <Link to="/" onClick={() => handleTitle("null")} className="logo">
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/" onClick={() => handleTitle("null")}>Home</Link>
                </li>
                <li>
                    <Link to="/#promocoes" onClick={() => handleTitle("promocoes")}>Promoções</Link>
                </li>
                <li>
                    <Link to="/#saborDaPizza" onClick={() => handleTitle("saborDaPizza")}>Sabor da pizza</Link>
                </li>
                <li>
                    <Link to="/cardapio" onClick={() => handleTitle("null")}>Cardápio</Link>
                </li>
                <li>
                    <Link to="/delivery" onClick={() => handleTitle("null")}>Delivery</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => handleTitle("null")}>Contato</Link>
                </li>
            </ul>
            <h3>Delivery: (53) <span>3210-5679</span></h3>
        </nav>
    )
}