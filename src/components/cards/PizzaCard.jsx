import { useState } from "react";
import "../../sass/components/cards/PizzaCard.sass"

const PizzaCard = ({ image, pizzaName, pizzaDescription, alert, smallPrice, mediumPrice, largePrice }) => {

    const [selectedSize, setSelectedSize] = useState('small')

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }

    const calculatePrice = (smallPrice, mediumPrice, largePrice) => {
        const sizeToPrice = {
            small: smallPrice,
            medium: mediumPrice,
            large: largePrice,
        }
        console.log(sizeToPrice[selectedSize])
        return sizeToPrice[selectedSize]
    }

    return (
        <div className="pizza-card">
            <img src={image} alt={pizzaName} />
            <div className="description-box">
                <h2 className="pizza-name">{pizzaName}</h2>
                <p className="pizza-description">{pizzaDescription}</p>

                <div className="sizes-box">
                    <input
                        type="radio"
                        name={`size-${pizzaName}`}
                        value="small"
                        checked={selectedSize === 'small'}
                        onChange={handleSizeChange}
                    />
                    <label htmlFor={`size-${pizzaName}`}>Média</label>

                    <input
                        type="radio"
                        name={`size-${pizzaName}`}
                        value="medium"
                        checked={selectedSize === 'medium'}
                        onChange={handleSizeChange}
                    />
                    <label htmlFor={`size-${pizzaName}`}>Grande</label>

                    <input
                        type="radio"
                        name={`size-${pizzaName}`}
                        value="large"
                        checked={selectedSize === 'large'}
                        onChange={handleSizeChange}
                    />
                    <label htmlFor={`size-${pizzaName}`}>Família</label>
                </div>


                <h3 className="price">R$ {calculatePrice(smallPrice, mediumPrice, largePrice)}</h3>
            </div>
            <p className={`${alert}`}>{alert}</p>
        </div>
    )
}

export default PizzaCard