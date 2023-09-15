import { useState } from "react";
import "../../sass/components/cards/PizzaCard.sass"
import BuyButton from "../buttons/BuyButton"

const PizzaCard = ({ image, pizzaName, pizzaDescription, alert, smallPrice, mediumPrice, largePrice }) => {

    const [selectedSize, setSelectedSize] = useState('small')
    const [add, setAdd] = useState("Adicionar ao pedido")

    function added() {
        setAdd("Adicionado")
        setTimeout(() => {
            setAdd("Adicionar ao pedido")
        }, 2000);
    }

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }

    const calculatePrice = (smallPrice, mediumPrice, largePrice) => {
        const sizeToPrice = {
            small: smallPrice,
            medium: mediumPrice,
            large: largePrice,
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
                            value="small"
                            checked={selectedSize === 'small'}
                            onChange={handleSizeChange}
                        />
                        <span className="size-name">Média</span>
                    </label>

                    <label htmlFor={`size-${pizzaName}`}>
                        <input
                            type="radio"
                            name={`size-${pizzaName}`}
                            value="medium"
                            checked={selectedSize === 'medium'}
                            onChange={handleSizeChange}
                        />
                        <span className="size-name">Grande</span>
                    </label>

                    <label htmlFor={`size-${pizzaName}`}>
                        <input
                            type="radio"
                            name={`size-${pizzaName}`}
                            value="large"
                            checked={selectedSize === 'large'}
                            onChange={handleSizeChange}
                            />
                        <span className="size-name">Família</span>
                    </label>
                </div>
                <h3 className="price">
                    R$ {calculatePrice(smallPrice, mediumPrice, largePrice)}
                </h3>
            </div>
            <BuyButton title={add} handleClick={added} custonClass="self-center" />
            <p className={`${alert}`}>{alert}</p>
        </div>
    )
}

export default PizzaCard