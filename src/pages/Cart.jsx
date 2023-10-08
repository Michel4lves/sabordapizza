import { useState } from "react";

import CartCard from "../components/cards/CartCard";
import Container from "../components/container/Container";
import TextInput from "../components/inputs/TextInput"
import BuyButton from "../components/buttons/BuyButton"
import LinkButton from "../components/buttons/LinkButton"
import "../sass/pages/Cart.sass"


export default function Cart({ onAddMenuCount, onDiscount }) {

    const [totalPrice, setTotalPrice] = useState(parseFloat(0.00).toFixed(2))
    const count = []
    const [code, setCode] = useState()
    const [discount, setDiscount] = useState(0.00)
    const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart')).products
    const [cartItems, setCartItems] = useState(localPizzaCart)
    const allQuantitiesZero = cartItems.every((item) => item.quantity === 0)


    const updateCartItemQuantity = (index, newQuantity) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = newQuantity;
        setCartItems(updatedCart);
        
        const allQuantitiesZero = cartItems.every((item) => item.quantity === 0)
        if (allQuantitiesZero) {
            setTotalPrice(parseFloat(0.00).toFixed(2))
            setDiscount(0.00)
            setCode("")
        }
    }


    const updateTotalPrice = (subTotal) => {
        const parsedSubTotal = parseFloat(subTotal)
        count.push(parsedSubTotal)
        const countTotal = somarElementosArray(count)
        setTotalPrice(countTotal.toFixed(2))
    }


    function somarElementosArray(arr) {
        return arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
    }


    const getCode = (e) => {
        setCode(e.target.value)
    }


    const checkCode = () => {
        if (code === "pizza" || code === "desconto") {
            setDiscount(10.00)
            onDiscount(10.00)
        }else{
            setDiscount(0.00)
            onDiscount(0.00)
        }
    }


    const outCode = () => {
        setDiscount(0.00)
        onDiscount(0.00)
        setCode("")
    }



    return (
        <div>
            <Container customClass="center-container">
                <h1 className="cart-title">Seu pedido:</h1>
                <div className="cartBx">
                    <div className="listBx">
                        {allQuantitiesZero ?
                            (<h1 className="empty">Seu carrinho está vazio!</h1>) :
                            <table className="product-list">
                                <thead className="table-title">
                                    <tr>
                                        <td>Produto</td>
                                        <td>Preço</td>
                                        <td>Quantidade</td>
                                        <td>Subtotal</td>
                                    </tr>
                                </thead>
                                <tbody className="table-list">
                                    {cartItems.map((product, index) => (
                                        (product.quantity > 0 && (
                                            <tr key={index}>
                                                <CartCard
                                                    image={product.image}
                                                    pizzaName={product.pizzaName}
                                                    pizzaSize={product.selectedSize}
                                                    price={parseFloat(product.preço)}
                                                    onUpdateTotalPrice={updateTotalPrice}
                                                    onUpdateQuantity={(newQuantity) => updateCartItemQuantity(index, newQuantity)}
                                                    onAddMenuCount={onAddMenuCount}
                                                />
                                            </tr>
                                        ))
                                    ))}
                                </tbody>
                            </table>
                        }
                    </div>
                    <div className="checkoutBx">
                        {!discount ? 
                            <details>
                                <summary>CUPOM DESCONTO</summary>
                                <div className="couponBx">
                                    <TextInput type="text" onCodeChange={getCode} />
                                    <BuyButton
                                        title="Adicionar" 
                                        handleClick={checkCode} 
                                        customClass={allQuantitiesZero ? "disable" : ""} 
                                        disableForm={allQuantitiesZero ? true : false}
                                    />
                                </div>
                            </details> : 
                            <div className="removeBx">
                                <span className="success">- R$ 10,00</span>
                                <BuyButton title="Remover" handleClick={outCode} />
                            </div>
                        }
                        <div className="subTotalBx">
                            <h4>Subtotal</h4>
                            <h4>R$ {totalPrice}</h4>
                        </div>
                        <div className="totalBx">
                            <h3>Total</h3>
                            <h3>R$ {parseFloat(totalPrice - discount).toFixed(2)}</h3>
                        </div>
                        <LinkButton title="Finalizar" to="/sabordapizza/checkout" />
                    </div>
                </div>
            </Container>
        </div>
    )
}