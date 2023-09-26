import { useEffect, useState } from "react";

import CartCard from "../components/cards/CartCard";
import Container from "../components/container/Container";
import TextInput from "../components/inputs/TextInput"
import BuyButton from "../components/buttons/BuyButton"
import LinkButton from "../components/buttons/LinkButton"
import "../sass/pages/Cart.sass"


export default function Cart() {

    const [totalPrice, setTotalPrice] = useState(0)
    const count = []
    const [code, setCode] = useState()
    const [discount, setDiscount] = useState(0.00)

    const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart')).products


    // const [updateKey, setUpdateKey] = useState(localPizzaCart.length)
    
    // function update() {
    //     setUpdateKey(localPizzaCart.length)
    // }


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
        }else{
            setDiscount(0.00)
        }
    }

    const outCode = () => {
        setDiscount(0.00)
    }


    return (
        <div>
            <Container customClass="center-container">
                <h1 className="cart-title">Seu pedido:</h1>
                <div className="cartBx">
                    <div className="listBx">
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
                                {localPizzaCart
                                    // .filter((product) => product.quantity !== 0)
                                    .map((product, index) => (
                                        <tr key={index}>
                                            <CartCard
                                                image={product.image}
                                                pizzaName={product.pizzaName}
                                                pizzaSize={product.selectedSize}
                                                price={parseFloat(product.preço)}
                                                onUpdateTotalPrice={updateTotalPrice}
                                            />
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        {/* <BuyButton title="Atualizar Carrinho" handleClick={forceRender} custonClass="right-button" /> */}
                    </div>
                    <div className="checkoutBx">
                        {!discount ? 
                            <details>
                                <summary>CUPOM DESCONTO</summary>
                                <div className="couponBx">
                                    <TextInput type="text" onCodeChange={getCode} />
                                    <BuyButton title="Adicionar" handleClick={checkCode} />
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