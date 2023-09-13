import "../../sass/components/buttons/BuyButton.sass"

export default function BuyButton({ title, handleClick }) {
    return (
        <button className="buy-button" onClick={handleClick}>{title}</button>
    )
}