import { useState } from "react";
import "../../sass/components/cards/PizzaCard.sass"
import BuyButton from "../buttons/BuyButton"
import AddCountButton from "../buttons/AddCountButton";

const PizzaCard = ({ image, pizzaName, pizzaDescription, alert, mediumPrice, largePrice, familyPrice, onAddMenuCount }) => {

    const [selectedSize, setSelectedSize] = useState('medium')
    const [add, setAdd] = useState("Adicionar ao pedido")
    
    const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart'))
    const index = localPizzaCart.products.findIndex((product) => product.pizzaName === pizzaName)
    
    let hasPizzaQuantity
    if (index !== -1) {
        hasPizzaQuantity = localPizzaCart.products[index].quantity
    }else{
        hasPizzaQuantity = 0
    }
    const [count, setCount] = useState(hasPizzaQuantity)


    function added() {
        setAdd("Adicionado")
        setTimeout(() => {
            setCount((count) => count + 1)
            setAdd("Adicionar ao pedido")
            const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart'))
            localPizzaCart.products.push(
                {
                    "image": image,
                    "pizzaName": pizzaName,
                    "selectedSize": selectedSize,
                    "quantity": 1,
                    "preço": calculatePrice(mediumPrice, largePrice, familyPrice)
                }
            )
            sessionStorage.setItem('pizzaCart', JSON.stringify(localPizzaCart))
            //
            onAddMenuCount(1)
        }, 1000);
    }


    function plus(pizzaName) {
        const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart'));
        const index = localPizzaCart.products.findIndex((product) => product.pizzaName === pizzaName && product.selectedSize === selectedSize);
        if (index !== -1) {
            setCount((count) => count + 1)
            localPizzaCart.products[index].quantity += 1
            onAddMenuCount(0)
        } else {
            setCount((count) => count + 1)
            localPizzaCart.products.push(
                {
                    "image": image,
                    "pizzaName": pizzaName,
                    "selectedSize": selectedSize,
                    "quantity": 1,
                    "preço": calculatePrice(mediumPrice, largePrice, familyPrice)
                }
            )
        }
        sessionStorage.setItem('pizzaCart', JSON.stringify(localPizzaCart))
        onAddMenuCount(1)
    }


    function less() {
        const localPizzaCart = JSON.parse(sessionStorage.getItem('pizzaCart'));
        const index = localPizzaCart.products.findIndex((product) => product.pizzaName === pizzaName && product.selectedSize === selectedSize);
        if (count) {
            if (index !== -1) {

                setCount((count) => count - 1)
                let quantity = localPizzaCart.products[index].quantity
                if (quantity) {
                    localPizzaCart.products[index].quantity -= 1
                    sessionStorage.setItem('pizzaCart', JSON.stringify(localPizzaCart))
                    onAddMenuCount(-1)
                }
                if (quantity === 1) {
                    localPizzaCart.products.splice(index, 1)
                    sessionStorage.setItem('pizzaCart', JSON.stringify(localPizzaCart))
                    if (index !== -1) {
                        onAddMenuCount(0)
                    }
                }
            }
        }
    }


    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }


    const calculatePrice = (mediumPrice, largePrice, familyPrice ) => {
        const sizeToPrice = {
            medium: mediumPrice,
            large: largePrice,
            family: familyPrice,
        }
        return sizeToPrice[selectedSize]
    }


    return (
        <div className="pizza-card">
            <img src={image} alt={pizzaName} />
            <div className="description-box">
                <h2 className="pizza-name">{pizzaName}</h2>
                <p className="pizza-description">{pizzaDescription}</p>

                <div className="sizes-box">
                    <label htmlFor={`size-${pizzaName}`}>
                        <input
                            type="radio"
                            name={`size-${pizzaName}`}
                            value="medium"
                            checked={selectedSize === 'medium'}
                            onChange={handleSizeChange}
                        />
                        <span className="size-name">Média</span>
                    </label>

                    <label htmlFor={`size-${pizzaName}`}>
                        <input
                            type="radio"
                            name={`size-${pizzaName}`}
                            value="large"
                            checked={selectedSize === 'large'}
                            onChange={handleSizeChange}
                        />
                        <span className="size-name">Grande</span>
                    </label>

                    <label htmlFor={`size-${pizzaName}`}>
                        <input
                            type="radio"
                            name={`size-${pizzaName}`}
                            value="family"
                            checked={selectedSize === 'family'}
                            onChange={handleSizeChange}
                            />
                        <span className="size-name">Família</span>
                    </label>
                </div>
                <h3 className="price">
                    R$ {calculatePrice(mediumPrice, largePrice, familyPrice)}
                </h3>
            </div>
            {count ?
                <AddCountButton handleClickLess={less} handleClickPlus={() => plus(pizzaName)} text={count} /> :
                <BuyButton title={add} handleClick={added} customClass="self-center" />
            }
            <p className={`${alert}`}>{alert}</p>
        </div>
    )
}

export default PizzaCard