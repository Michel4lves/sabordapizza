import TextInput from "../inputs/TextInput"
import TextArea from "../inputs/TextArea"
import SendButton from "../buttons/SendButton"

import "../../sass/components/forms/ContactForm.sass"
import { useState } from "react"

const ClientForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    function submit(e) {
        setTimeout(() => {
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, 2000)
    }

    return (
        <form className="form" name="clientForm" action="https://formsubmit.co/michelsantosa@gmail.com" method="POST" onSubmit={submit}>
            {/* submit configuration */}
            <input type="hidden" name="_next" value="https://michel4lves.github.io/Thanks_Page/"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_template" value="table"></input>
            {/* End of submit configuration */}
            <TextInput type="text" placeholder="Nome *" name="name" value={name} required="required" />
            <TextInput type="text" placeholder="CPF *" name="personalId" value={name} required="required" />
            <TextInput type="text" placeholder="Endereço *" name="address" value={name} required="required" />
            <TextInput type="text" placeholder="Número *" name="adressNumber" value={name} required="required" />
            <TextInput type="text" placeholder="Complemento" name="complement" value={name} required="required" />
            <TextInput type="text" placeholder="Telefone *" name="phone" value={phone} required="required" />
            <TextInput type="text" placeholder="Email" name="email" value={email} />
            <TextArea type="textarea" placeholder="Observações" name="message" value={message} />
            <SendButton title="Enviar" handleClick={submit} />
        </form>
    )
}

export default ClientForm