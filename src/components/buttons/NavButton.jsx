import { FaPizzaSlice } from "react-icons/fa";

import "../../sass/components/buttons/NavButton.sass"

export default function NavButton({ active }) {
    return (
        <div className={`${"nav-button"} ${active}`}>
            <FaPizzaSlice />
        </div>
    )
}