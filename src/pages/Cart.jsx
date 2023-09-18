import CartCard from "../components/cards/CartCard";
import Container from "../components/container/Container";
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
                                />
                            </tr>
                            <tr>
                                <CartCard
                                    image={pizza7}
                                    pizzaName="Pizza Quatro Queijos"
                                    pizzaSize="Família"
                                />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}