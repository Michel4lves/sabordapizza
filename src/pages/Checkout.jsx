// import { useState } from "react"
import BuyButton from "../components/buttons/BuyButton"
import Container from "../components/container/Container"
import ClientForm from "../components/forms/ClientForm"
import "../sass/pages/Checkout.sass"

export default function Checkout({ discount }) {

    const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart')).products
    const productsCount = localPizzaCart.reduce((accumulator, item) => accumulator + parseFloat(item.preço), 0)



    return (
        <div>
            <Container customClass="center-container">
                <h1 className="checkout-title">Finalizar pedido:</h1>
                <div className="checkoutBox">
                    <div className="checkout-form">
                        <ClientForm />
                    </div>
                    <div className="checkoutDataBx">
                        <div className="orderBx">
                            <h4>Seu pedido</h4>
                            <table className="product-list">
                                <thead className="table-order-title">
                                    <tr>
                                        <td>Produto:</td>
                                        <td>Subtotal:</td>
                                    </tr>
                                </thead>
                                <tbody className="table-order-list">
                                    {localPizzaCart.map((product, index) => (
                                        (product.quantity > 0 && (
                                            <tr key={index}>
                                                <td>
                                                    <div className="product-order">
                                                        <h3 className="product-name">{product.pizzaName} <span>x {product.quantity}</span></h3>
                                                        <p>Tamanho: {product.selectedSize}</p>
                                                    </div>
                                                </td>
                                                <td className="product-price">R$ {parseFloat(product.preço).toFixed(2)}</td>
                                            </tr>
                                        ))
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="discountBx">
                            <h4>Desconto:</h4>
                            <h4>- R$ {discount.toFixed(2)}</h4>
                        </div>
                        <div className="subTotalBx">
                            <h4>Subtotal:</h4>
                            <h4>R$ {productsCount.toFixed(2)}</h4>
                        </div>
                        <div className="totalBx">
                            <h3>Total:</h3>
                            <h3>R$ {parseFloat(productsCount - discount).toFixed(2)}</h3>
                        </div>
                        <div className="paymentBx">
                            <h3>Forma de pagamento:</h3>
                            <div className="payment">
                                <label htmlFor="payMethod">
                                    <input
                                        type="radio"
                                        name="payMethod"
                                        defaultChecked
                                    />
                                    <span className="size-name">Pagamento na entrega</span>
                                </label>
                                <p>Pague em dinheiro na entrega.</p>
                            </div>
                            <p>Os seus dados pessoais não serão utilizados para processar a sua encomenda, sua experiência neste site é pura ficção, por tratar-se de um exemplo front-end.</p>
                        </div>
                        <BuyButton title="Enviar pedido" />
                    </div>
                </div>
            </Container>
        </div>
    )
}