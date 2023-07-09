import "../../sass/components/cards/PromotionCard.sass"

const PromotionCard = ({ image, title, text1, text2, price }) => {
    return (
        <div className="promotion-card">
            <img src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <p className="text1">{text1}</p>
            <p className="text2">{text2}</p>
            <h2 className="price">{price}</h2>
        </div>
    )
}

export default PromotionCard