import { BsFillCartCheckFill } from "react-icons/bs"

import "../../sass/components/popups/popAddedRemove.sass"

export default function PopAdded({ dynamicClass, pizzaName }) {
    return (
        <div className={dynamicClass}>
            <BsFillCartCheckFill />
            <div className="msg">
                <h4>Pizza: <span>{pizzaName}</span> foi</h4>
                <h4>adicionada ao seu carrinho.</h4>
            </div>
        </div>
    )
}