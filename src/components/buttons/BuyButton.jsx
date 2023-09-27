import "../../sass/components/buttons/BuyButton.sass"

export default function BuyButton({ title, handleClick, custonClass, disableForm }) {
    return (
        <button className={`buy-button ${custonClass}`} onClick={handleClick} disabled={disableForm}>{title}</button>
    )
}