import "../../sass/components/cards/PromotionCard.sass"

const PromotionCard = ({ image, title, title2, text1, text2 }) => {

    return (
        <div className="promotion-card">
            <img src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <h2 className="title2">{title2}</h2>
            <p className="text1">{text1}</p>
            <p className="text2">{text2}</p>
        </div>
    )
}

export default PromotionCard