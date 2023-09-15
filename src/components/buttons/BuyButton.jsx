import "../../sass/components/buttons/BuyButton.sass"

export default function BuyButton({ title, handleClick, custonClass }) {
    return (
        <button className={`buy-button ${custonClass}`} onClick={handleClick}>{title}</button>
    )
}