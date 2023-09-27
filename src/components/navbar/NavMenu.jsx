import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { GiBeachBag } from "react-icons/gi";

import "../../sass/components/navbar/NavBar.sass"
import "../../sass/components/navbar/NavMenu.sass"

import logo from "../../img/logo.png"


export default function NavMenu({ productsCounted }) {
    
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
            <Link to="sabordapizza/" onClick={() => handleTitle("null")} className="logo">
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <li>
                    <Link to="sabordapizza/" onClick={() => handleTitle("null")}>Home</Link>
                </li>
                <li>
                    <Link to="/sabordapizza/#promocoes" onClick={() => handleTitle("promocoes")}>Promoções</Link>
                </li>
                <li>
                    <Link to="/sabordapizza/#saborDaPizza" onClick={() => handleTitle("saborDaPizza")}>Sabor da pizza</Link>
                </li>
                <li>
                    <Link to="/sabordapizza/cardapio" onClick={() => handleTitle("null")}>Cardápio</Link>
                </li>
                <li>
                    <div className="anchor">
                        Páginas
                        <div className="sub-option-bg">
                            <ul>
                                <li>
                                    <Link to="/sabordapizza/delivery" onClick={() => handleTitle("null")} className="sub-option">Delivery</Link>
                                </li>
                                <li>
                                    <Link to="/sabordapizza/cart" onClick={() => handleTitle("null")} className="sub-option">Carrinho</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/sabordapizza/contact" onClick={() => handleTitle("null")}>Contato</Link>
                </li>
                <li>
                    <Link to="/sabordapizza/cart" onClick={() => handleTitle("null")}><GiBeachBag /><span className="cart-quant">{productsCounted}</span></Link>
                </li>
            </ul>
            <h3>Delivery: (53) <span>3210-5679</span></h3>
        </nav>
    )
}