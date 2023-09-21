import { useState } from "react";

import CartCard from "../components/cards/CartCard";
import Container from "../components/container/Container";
import TextInput from "../components/inputs/TextInput"
import BuyButton from "../components/buttons/BuyButton"
import LinkButton from "../components/buttons/LinkButton"
import "../sass/pages/Cart.sass"

import pizza1 from "../img/pizza01.jpg"
import pizza7 from "../img/pizza07.jpg"

export default function Cart() {

    const [totalPrice, setTotalPrice] = useState(0)
    const count = []
    const [code, setCode] = useState()
    const [discount, setDiscount] = useState(0.00)

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
                            <tr>
                                <CartCard
                                    image={pizza1}
                                    pizzaName="Pizza Mar e Terra"
                                    pizzaSize="Grande"
                                    price={62.90}
                                    onUpdateTotalPrice={updateTotalPrice}
                                />
                            </tr>
                            <tr>
                                <CartCard
                                    image={pizza7}
                                    pizzaName="Pizza Quatro Queijos"
                                    pizzaSize="Família"
                                    price={74.90}
                                    onUpdateTotalPrice={updateTotalPrice}
                                />
                            </tr>
                        </tbody>
                    </table>
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
                        <LinkButton title="Finalizar" to="sabordapizza/checkout" />
                    </div>
                </div>
            </Container>
        </div>
    )
}