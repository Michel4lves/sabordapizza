import { useEffect, useState } from "react";
import "../../sass/components/cards/CartCard.sass"
import AddCountButton from "../buttons/AddCountButton";

const CartCard = ({ image, pizzaName, pizzaSize, price, onUpdateTotalPrice }) => {

    const [count, setCount] = useState(1)
    const [subTotal, setSubTotal] = useState(price)

    function less() {
        if (count) {
            setCount((count) => count - 1)
        }
    }
    
    if (!count) {
        setCount(1)
    }

    function plus() {
        setCount((count) => count + 1)
    }

    useEffect(() => {
        function countPrice() {
            const newSubTotal = (count * parseFloat(price)).toFixed(2)
            setSubTotal(newSubTotal)
            onUpdateTotalPrice(newSubTotal)
        }
        countPrice()
    }, [count, price, onUpdateTotalPrice])

    return (
        <>
            <td>
                <div className="product-box">
                    <img src={image} alt={pizzaName} className="cart-pizza" />
                    <div className="name-box">
                        <h2 className="pizza-name">{pizzaName}</h2>
                        <p className="pizza-size">{pizzaSize}</p>
                    </div>
                </div>
            </td>
            <td>
                <h3 className="cart-price">
                    R$ {parseFloat(price).toFixed(2)}
                </h3>
            </td>
            <td>
                <AddCountButton handleClickLess={less} handleClickPlus={plus} text={count} />
            </td>
            <td>
                <h3 className="cart-price">
                    R$ {subTotal}
                </h3>
            </td>
        </>
    )
}

export default CartCard