import { BsFillCartDashFill } from "react-icons/bs"

import "../../sass/components/popups/popAddedRemove.sass"

export default function PopRemove({ dynamicClass, pizzaName }) {
    return (
        <div className={dynamicClass}>
            <BsFillCartDashFill />
            <div className="msg">
                <h4>Pizza: <span>{pizzaName}</span> foi</h4>
                <h4>removido do seu carrinho.</h4>
            </div>
        </div>
    )
}