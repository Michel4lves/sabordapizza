import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { GiBeachBag } from "react-icons/gi";

import "../../sass/components/navbar/NavBar.sass"

import logo from "../../img/logo.png"
import LinkButton from "../buttons/LinkButton";
import NavButton from "../buttons/NavButton";


export default function NavMenu({ counted }) {

    const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart')).products
    const productsCount = localPizzaCart.reduce((accumulator, item) => accumulator + parseFloat(item.preço), 0)

    const location = useLocation()
    const [title, setTitle] = useState("null")

    const [isActived, setIsActived] = useState()

    const handleTitle = (titleId) => {
        setTitle(titleId)
    }

    function menuToogle(isActived) {
        setIsActived(isActived)
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
            <ul className={isActived}>
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
                            <ul className="sub-option-ul">
                                <li>
                                    <Link to="/sabordapizza/delivery" onClick={() => handleTitle("null")} className="sub-option">Delivery</Link>
                                </li>
                                <li>
                                    <Link to="/sabordapizza/cart" onClick={() => handleTitle("null")} className="sub-option">Carrinho</Link>
                                </li>
                                <li>
                                    <Link to="/sabordapizza/page404" onClick={() => handleTitle("null")} className="sub-option">404</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/sabordapizza/contact" onClick={() => handleTitle("null")}>Contato</Link>
                </li>
                <li>
                    <div className="anchor-2">
                        <Link to="/sabordapizza/cart" onClick={() => handleTitle("null")}>
                            <GiBeachBag /><span className="cart-quant">{counted}</span>
                        </Link>
                        <div className="sub-option-cart-bg">
                            {productsCount ?
                                <ul className="sub-option-ul-cart">
                                    {localPizzaCart.map((product, index) => (
                                        (product.quantity > 0 && (
                                            <li key={index}>
                                                <div className="cart-image">
                                                    <img src={product.image} alt={product.pizzaName} />
                                                </div>
                                                <div className="cart-order">
                                                    <h3 className="cart-name">{product.pizzaName} </h3>
                                                    <p className="cart-size-price">{product.selectedSize} {product.quantity} x<span className="cart-price"> R$ {parseFloat(product.preço).toFixed(2)}</span></p>
                                                </div>
                                            </li>
                                        ))
                                    ))}
                                    <div className="cart-sub-total">
                                        <h4>Subtotal</h4>
                                        <h4>R$ {productsCount.toFixed(2)}</h4>
                                    </div>

                                    <div className="cart-links">
                                        <LinkButton title="Carrinho" to="/sabordapizza/cart" customClass="cart-link" />
                                        <LinkButton title="Finalizar" to="/sabordapizza/checkout" customClass="check-link" />
                                    </div>
                                </ul>
                                :
                                    <h4 className="cart-empty">Seu carrinho está vazio!</h4>
                            }
                        </div>
                    </div>
                </li>
            </ul>
            <h3 className="delivery">Delivery: (53) <span>3210-5679</span></h3>
            <NavButton onActived={menuToogle} />
        </nav>
    )
}