import "../../sass/components/buttons/BuyButton.sass"

export default function BuyButton({ title, handleClick, customClass, disableForm }) {
    return (
        <button className={`buy-button ${customClass}`} onClick={handleClick} disabled={disableForm}>{title}</button>
    )
}