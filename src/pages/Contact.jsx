import Container from "../components/container/Container";
import ContactForm from "../components/forms/ContactForm";

import logoGray from "../img/logo-gray.png"

import "../sass/pages/Contact.sass"

export default function Contact() {
    return (
        <div>
            <Container customClass="center-container">
                <h1 className="contact-title">Fale conosco</h1>
                <div className="contacts">
                    <div className="contact-info">
                        <img src={logoGray} alt="logo-gray" />
                        <p>(53) <span>3210-5679</span></p>
                        <h2>Email:</h2>
                        <p>contato@sabordapizza.com.br</p>
                    </div>
                    <span className="bar"></span>
                    <div className="contact-form">
                        <p>
                            Queremos saber sua Opinião!<br/>
                            Envie suas Dúvidas, Críticas e Sugestões.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </div>
    )
}