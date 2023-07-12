import Payment from "../../img/payment.png"

import "../../sass/components/footer/Footer.sass"

const Footer = () => {
    return (
        <>
            <div className="footer-box">
                <div className="footer-column-1">
                    <h3>Delivery:</h3>
                    <p>(53) <span>3210-5679</span></p>
                </div>
                <div className="footer-column-2">
                    <div className="servive">
                        <h3>Atendimento:</h3>
                        <p>
                            Terça a Domingo <br/>
                            das 19:00hs até 00:00hs
                        </p>
                    </div>
                    <div className="payment-form">
                        <h3>Formas de pagamento:</h3>
                        <img src={Payment} alt="payment" />
                    </div>
                </div>
                <div className="footer-column-3">
                    <h3>Localização:</h3>
                    <p>Av. Principal, 888 - Centro, Cidade Grande - RS</p>
                    <div className="location-map">MAPA</div>
                </div>
            </div>
            <div className="social-media">

            </div>
        </>
    )
}

export default Footer