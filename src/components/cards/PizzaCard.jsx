import "../../sass/components/cards/PizzaCard.sass"

const PizzaCard = ({ image, pizzaName, pizzaDescription, alert, price }) => {
    return (
        <div className="pizza-card">
            <img src={image} alt={pizzaName} />
            <div className="description-box">
                <h2 className="pizza-name">{pizzaName}</h2>
                <p className="pizza-description">{pizzaDescription}</p>
                <p className="alert">{alert}</p>
                <h3 className="price">{price}</h3>
            </div>
        </div>
    )
}

export default PizzaCard