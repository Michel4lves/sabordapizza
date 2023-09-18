import { useState } from "react"
import "../../sass/components/cards/PromotionCard.sass"
import BuyButton from "../buttons/BuyButton"
import AddCountButton from "../buttons/AddCountButton"

const PromotionCard = ({ image, title, text1, text2, price }) => {

    const [add, setAdd] = useState("Adicionar ao pedido")
    
    const [count, setCount] = useState(0)

    function added() {
        setAdd("Adicionado")
        setTimeout(() => {
            setCount((count) => count + 1)
            setAdd("Adicionar ao pedido")
        }, 1000);
    }

    function less() {
        if (count) {
            setCount((count) => count - 1)
        }
    }

    function plus() {
        setCount((count) => count + 1)
    }

    return (
        <div className="promotion-card">
            <img src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <p className="text1">{text1}</p>
            <p className="text2">{text2}</p>
            <h2 className="price">{price}</h2>
            {count ?
                <AddCountButton handleClickLess={less} handleClickPlus={plus} text={count} custonClass="center" /> :
                <BuyButton title={add} handleClick={added} custonClass="self-center" />
            }
        </div>
    )
}

export default PromotionCard