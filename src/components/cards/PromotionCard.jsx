import { useState } from "react"
import "../../sass/components/cards/PromotionCard.sass"
import BuyButton from "../buttons/BuyButton"

const PromotionCard = ({ image, title, text1, text2, price }) => {

    const [add, setAdd] = useState("Adicionar ao pedido")

    function added() {
        setAdd("Adicionado")
        setTimeout(() => {
            setAdd("Adicionar ao pedido")
        }, 2000);
    }


    return (
        <div className="promotion-card">
            <img src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <p className="text1">{text1}</p>
            <p className="text2">{text2}</p>
            <h2 className="price">{price}</h2>
            <BuyButton title={add} handleClick={added} />
        </div>
    )
}

export default PromotionCard