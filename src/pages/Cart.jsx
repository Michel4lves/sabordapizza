import CartCard from "../components/cards/CartCard";
import Container from "../components/container/Container";
import TextInput from "../components/inputs/TextInput"
import BuyButton from "../components/buttons/BuyButton"
import LinkButton from "../components/buttons/LinkButton"
import "../sass/pages/Cart.sass"

import pizza1 from "../img/pizza01.jpg"
import pizza7 from "../img/pizza07.jpg"

export default function Cart() {
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
                                />
                            </tr>
                            <tr>
                                <CartCard
                                    image={pizza7}
                                    pizzaName="Pizza Quatro Queijos"
                                    pizzaSize="Família"
                                    price={74.90}
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
                            <h4>R$ 123,80</h4>
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