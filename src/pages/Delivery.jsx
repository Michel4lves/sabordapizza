import DeliveryCard from "../components/cards/DeliveryCard";
import Container from "../components/container/Container";

import "../sass/pages/Delivery.sass"

export default function Delivery() {
    return (
        <div>
            <div className="delivery-card-bg"></div>
            <Container customClass="center-container">
                <DeliveryCard />
                <h3 className="sizes">Escolha um tamanho de acordo com a sua fome:</h3>
                <div className="sizes-box">
                    <div className="size-card">
                        <div className="pizza-circle-45"></div>
                        <div className="pizza-type">
                            <p>Família (45cm)</p>
                            <p>até 4 sabores</p>
                        </div>
                    </div>
                    <div className="size-card">
                        <div className="pizza-circle-35"></div>
                        <div className="pizza-type">
                            <p>Grande (35cm)</p>
                            <p>até 3 sabores</p>
                        </div>
                    </div>
                    <div className="size-card">
                        <div className="pizza-circle-30"></div>
                        <div className="pizza-type">
                            <p>Média (30cm)</p>
                            <p>até 2 sabores</p>
                        </div>
                    </div>
                    <div className="size-card">
                        <div className="pizza-circle-20"></div>
                        <div className="pizza-type">
                            <p>Broto (20cm)</p>
                            <p>1 sabor</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}