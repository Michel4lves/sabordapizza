import Delivery from "../../img/delivery.jpg"

import MakeDelivery from "../../img/make-online.png"
import WatzApp from "../../img/zapp.png"

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
                    <div className="delivery-button">
                        <img src={MakeDelivery} alt="make-online" />
                    </div>
                    <div className="delivery-button">
                        <img src={WatzApp} alt="make-watzapp" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryCard