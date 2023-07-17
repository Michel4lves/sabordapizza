import { BiMessageRoundedDots } from "react-icons/bi";

import "../../sass/components/inputs/Inputs.sass"

export default function TextArea({ type, placeholder, name }) {
    return (
        <div className="input-box-textarea">
            <div className="type-icon"><BiMessageRoundedDots /></div>
            <textarea 
                type={type}
                placeholder={placeholder} 
                name={name} 
            >
            </textarea>
        </div>
    )
}