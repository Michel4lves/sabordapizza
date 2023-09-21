import DeliveryCard from "../components/cards/DeliveryCard";
import Container from "../components/container/Container";

import "../sass/pages/Delivery.sass"

export default function Delivery() {
    return (
        <div>
            <div className="delivery-card-bg"></div>
            <Container customClass="center-container">
                <DeliveryCard />
                <div className="frete">
                    <h1 className="free">Frete Grátis!!!</h1>
                    <p>Para toda a região central</p>
                    
                </div>
                <h3 className="sizes">O tamanho ideal de acordo com a sua fome:</h3>
                <div className="sizes-box">
                    <div className="size-card">
                        <div className="pizza-circle-45">
                            <span className="slice-45"></span>
                        </div>
                        <div className="pizza-type">
                            <p>Família</p>
                            <p>45cm</p>
                        </div>
                    </div>
                    <div className="size-card">
                        <div className="pizza-circle-35"></div>
                        <div className="pizza-type">
                            <p>Grande</p>
                            <p>35cm</p>
                        </div>
                    </div>
                    <div className="size-card">
                        <div className="pizza-circle-30"></div>
                        <div className="pizza-type">
                            <p>Média</p>
                            <p>30cm</p>
                        </div>
                    </div>
                    <div className="size-card">
                        <div className="pizza-circle-20"></div>
                        <div className="pizza-type">
                            <p>Broto</p>
                            <p>20cm</p>
                        </div>
                    </div>
                </div>
                
            </Container>
        </div>
    )
}