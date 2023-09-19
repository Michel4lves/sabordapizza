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

    const updateTotalPrice = (subTotal) => {
        if (subTotal === 0) {
            count.push(null)
        }else{
            count.push(parseFloat(subTotal))
        }
        const countTotal = somarElementosArray(count);
        setTotalPrice(parseFloat(countTotal).toFixed(2))
        // console.log(countTotal)
        console.log(count)
    }
    
    function somarElementosArray(arr) {
        return arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
    }


    // const [totalPrice, setTotalPrice] = useState(0);
    // const count = [];
    
    // const updateTotalPrice = (subTotal) => {
    //     const parsedSubTotal = parseFloat(subTotal);
    
    //     // Verifica se o valor é zero
    //     if (parsedSubTotal === 0) {
    //         // Remove o valor diferente do zero do array
    //         const index = count.indexOf(parsedSubTotal === 0 ? 1 : 0);
    //         if (index !== -1) {
    //         count.splice(index, 1);
    //         }
    //     } else {
    //         // Remove o valor diferente do novo valor e adiciona o novo valor
    //         const index = count.indexOf(parsedSubTotal === 0 ? 1 : 0);
    //         if (index !== -1) {
    //         count.splice(index, 1);
    //         }
    //         count.push(parsedSubTotal);
    //     }
    
    //     // Calcula a soma atualizada e a define no estado
    //     const countTotal = somarElementosArray(count);
    //     setTotalPrice(parseFloat(countTotal).toFixed(2));
    
    //     // Exibe os valores recebidos
    //     console.log(countTotal);
    // };
    
    // function somarElementosArray(arr) {
    //     return arr.reduce((acumulador, elemento) => acumulador + elemento, 0);
    // }









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
                        <details>
                            <summary>COUPON CODE</summary>
                            <div className="couponBx">
                                <TextInput type="text" />
                                <BuyButton title="Adicionar" />
                            </div>
                        </details>
                        <div className="subTotalBx">
                            <h4>Subtotal</h4>
                            <h4>R$ {totalPrice}</h4>
                        </div>
                        <div className="totalBx">
                            <h3>Total</h3>
                            <h3>R$ 123,80</h3>
                        </div>
                        <LinkButton title="Finalizar" to="sabordapizza/checkout" />
                    </div>
                </div>
            </Container>
        </div>
    )
}