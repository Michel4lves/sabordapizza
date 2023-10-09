import { useEffect, useState } from "react";
import "../../sass/components/cards/CartCard.sass"
import AddCountButton from "../buttons/AddCountButton";

const CartCard = ({ image, 
                pizzaName, 
                pizzaSize, 
                price, 
                onUpdateTotalPrice, 
                onUpdateQuantity, 
                onAddMenuCount, 
                onAddedPizzaName,
                onRemovePizzaName }) => {

    const [subTotal, setSubTotal] = useState(price)

    const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart'))
    const index = localPizzaCart.products.findIndex((product) => product.pizzaName === pizzaName && product.selectedSize === pizzaSize)
    
    let hasPizzaQuantity
    if (index !== -1) {
        hasPizzaQuantity = localPizzaCart.products[index].quantity
    }else{
        hasPizzaQuantity = 0
    }
    const [count, setCount] = useState(hasPizzaQuantity)


    function plus(pizzaName, pizzaSize) {
        const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart'))
        const index = localPizzaCart.products.findIndex((product) => product.pizzaName === pizzaName && product.selectedSize === pizzaSize)
        setCount((count) => count + 1)
        localPizzaCart.products[index].quantity += 1
        sessionStorage.setItem('pizzaCart', JSON.stringify(localPizzaCart))
        onUpdateQuantity(localPizzaCart.products[index].quantity)
        onAddMenuCount(1)
        onAddedPizzaName(pizzaName)
    }


    function less() {
        const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart'));
        const index = localPizzaCart.products.findIndex((product) => product.pizzaName === pizzaName && product.selectedSize === pizzaSize)
        if (count) {
            setCount((count) => count - 1)
            let quantity = localPizzaCart.products[index].quantity
            if (quantity) {
                localPizzaCart.products[index].quantity -= 1
                sessionStorage.setItem('pizzaCart', JSON.stringify(localPizzaCart))
                onUpdateQuantity(localPizzaCart.products[index].quantity)
                onAddMenuCount(-1)
                onRemovePizzaName(pizzaName)
            }
            if (quantity === 1) {
                localPizzaCart.products.splice(index, 1)
                sessionStorage.setItem('pizzaCart', JSON.stringify(localPizzaCart))
                onUpdateQuantity(0)
                if (index !== -1) {
                    onAddMenuCount(0)
                    onRemovePizzaName(pizzaName)
                }
            }
        }else{
            return null;
        }
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
                <AddCountButton handleClickLess={less} handleClickPlus={() => plus(pizzaName, pizzaSize)} text={count} />
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