import { FaPizzaSlice } from "react-icons/fa";

import "../../sass/components/buttons/NavButton.sass"
import { useState } from "react";

export default function NavButton({ onActived }) {

    const [isActive, setIsActive] = useState(false)

    function toogleActive() {
        setIsActive(!isActive)
        onActived(!isActive)
    }

    return (
        <div className="navbutton" onClick={toogleActive}>
            <FaPizzaSlice />
        </div>
    )
}