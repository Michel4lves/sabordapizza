import { useState } from "react"
import Container from "../components/container/Container"
import ClientForm from "../components/forms/ClientForm"
import "../sass/pages/Checkout.sass"
import TextInput from "../components/inputs/TextInput"
import BuyButton from "../components/buttons/BuyButton"

export default function Checkout() {

    const [code, setCode] = useState()
    const [discount, setDiscount] = useState(0.00)

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
                <h1 className="checkout-title">Finalizar pedido:</h1>
                <div className="checkoutBox">
                    <div className="checkout-form">
                        <ClientForm />
                    </div>
                    <div className="checkoutDataBx">
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
                        <div className="orderBx">
                            <h4>Seu pedido</h4>
                            <table className="product-order-list">
                                <thead className="table-order-title">
                                    <tr>
                                        <td>Produto</td>
                                        <td>Subtotal</td>
                                    </tr>
                                </thead>
                                <tbody className="table-order-list">
                                    <tr>
                                        <td>
                                            <div className="product-order">
                                                <h3 className="product-name">Pizza Mar e Terra <span>x 1</span></h3>
                                                <p>Tamanho: Grande</p>
                                            </div>
                                        </td>
                                        <td className="product-price">R$ 0,00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="product-order">
                                                <h3 className="product-name">Pizza Quatro Queijos <span>x 1</span></h3>
                                                <p>Tamanho: Família</p>
                                            </div>
                                        </td>
                                        <td className="product-price">R$ 0,00</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <h4>R$ {totalPrice}</h4> */}
                        </div>
                        <div className="subTotalBx">
                            <h4>Subtotal</h4>
                            {/* <h4>R$ {totalPrice}</h4> */}
                        </div>
                        <div className="totalBx">
                            <h3>Total</h3>
                            {/* <h3>R$ {parseFloat(totalPrice - discount).toFixed(2)}</h3> */}
                        </div>
                        {/* <LinkButton title="Finalizar" to="/sabordapizza/checkout" /> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}