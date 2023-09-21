import Delivery from "../../img/delivery.jpg"

import "../../sass/components/cards/DeliveryCard.sass"

const DeliveryCard = () => {
    return (
        <div className="delivery-card">
            <img src={Delivery} alt="Delivery" />
            <div className="msg-box">
                <h1><span>BATEU</span>AQUELA<span>FOME?</span></h1>
                <p>chama que a gente entrega</p>
                <p>(53) 3210-5679</p>
                <div className="make-delivery">
                    <h1>Confira nossas promoções</h1>
                </div>
            </div>
        </div>
    )
}

export default DeliveryCard