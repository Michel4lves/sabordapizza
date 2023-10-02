import TextInput from "../inputs/TextInput"
import TextArea from "../inputs/TextArea"

import "../../sass/components/forms/ContactForm.sass"
import { useState } from "react"

const ClientForm = () => {

    const [name, setName] = useState();
    const [personalId, setPersonalId] = useState();
    const [address, setAddress] = useState();
    const [addressNumber, setAddressNumber] = useState();
    const [complement, setComplement] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    function submit(e) {
        setTimeout(() => {
            setName('');
            setPersonalId('');
            setAddress('');
            setAddressNumber('');
            setComplement('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, 2000)
    }

    return (
        <form className="form" name="clientForm" method="POST" onSubmit={submit}>
            <TextInput type="text" placeholder="Nome *" name="name" value={name} required="required" />
            <TextInput type="text" placeholder="CPF *" name="personalId" value={personalId} required="required" />
            <TextInput type="text" placeholder="Endereço *" name="address" value={address} required="required" />
            <TextInput type="text" placeholder="Número *" name="addressNumber" value={addressNumber} required="required" />
            <TextInput type="text" placeholder="Complemento" name="complement" value={complement} required="required" />
            <TextInput type="text" placeholder="Telefone *" name="phone" value={phone} required="required" />
            <TextInput type="text" placeholder="Email" name="email" value={email} />
            <TextArea type="textarea" placeholder="Observações" name="message" value={message} />
        </form>
    )
}

export default ClientForm