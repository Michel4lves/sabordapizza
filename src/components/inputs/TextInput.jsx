import "../../sass/components/inputs/Inputs.sass"

import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { LiaAddressCard } from "react-icons/lia";
import { GoNumber } from "react-icons/go";

export default function TextInput({ type, placeholder, name, required, onCodeChange }) {

    const TypeInput = () => {
        switch (name) {
            case 'name':
                return <BsPersonCircle />
            case 'email':
                return <MdAlternateEmail />
            case 'phone':
                return <BiSolidPhone />
            case 'address':
                return <MdLocationOn />
            case 'personalId':
                return <LiaAddressCard />
            case 'adressNumber':
                return <AiOutlineFieldNumber />
            case 'complement':
                return <GoNumber />
            default:
                return ""
        }
    }



    return (
        <div className="input-box">
            <div className="type-icon">{TypeInput()}</div>
            <input 
                type={type}
                placeholder={placeholder} 
                name={name} 
                required={required}
                onChange={onCodeChange}
                >
            </input>
        </div>
    )
}