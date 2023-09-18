import { Link } from "react-router-dom"
import "../../sass/components/buttons/BuyButton.sass"

export default function LinkButton({ title, handleClick, custonClass, to}) {
    return (
        <Link className={`Link-button ${custonClass}`} to={to} onClick={handleClick}>{title}</Link>
    )
}