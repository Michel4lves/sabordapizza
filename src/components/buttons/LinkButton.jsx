import { Link } from "react-router-dom"
import "../../sass/components/buttons/BuyButton.sass"

export default function LinkButton({ title, handleClick, customClass, to}) {
    return (
        <Link className={`Link-button ${customClass}`} to={to} onClick={handleClick}>{title}</Link>
    )
}