import "../sass/home.sass"

import banner from "../img/banner.jpg"
import Container from "../components/container/Container"
import PromotionCard from "../components/cards/PromotionCard"

import pizzaTwo from "../img/pizza-two.png"
import pizzafamilySoda from "../img/pizzas-family-soda.png"
import pizzafamily from "../img/pizzas-family.png"
import pizzaBig from "../img/pizzas-big.png"

export default function Home() {
    return (
        <div>
            <main className="banner">
                <img src={banner} alt="banmner.jpg" className="banner-img" />
            </main>
            <Container customClass="center-container-home">
                <section className="promotions">
                    <h1 id="promocoes">Promoções</h1>
                    <div className="promotion-card-box">
                        <PromotionCard 
                            image={pizzaTwo}
                            title="2 Pizzas Grandes"
                            text1="até 2 Sabores Tradicionais por Pizza"
                            text2="Tele Entrega Grátis"
                            price="R$ 85,00**"
                        />
                        <PromotionCard 
                            image={pizzafamilySoda}
                            title="Pizza Família + Refri 2l"
                            text1="até 4 sabores"
                            text2="Somente Retirada no Balcão"
                            price="R$ 79,90*"
                        />
                        <PromotionCard 
                            image={pizzafamily}
                            title="Pizza Familia"
                            text1="Segunda a Sexta (Exceto Feriados)"
                            text2="Válidas para pedidos via telefone"
                            price="Grátis Broto Chocolate"
                        />
                        <PromotionCard 
                            image={pizzaBig}
                            title="Pizza Grande"
                            text1="até 2 Sabores Tradicionais"
                            text2="Retirada no Balcão"
                            price="R$ 49,90**"
                        />
                    </div>
                    <p className="obs">* Taxa de entrega não inclusa; Promoções não cumulativas; Sabores Tradicionais </p>
                    <p className="obs">**Sabores Premium, Doces e Bordas não Inclusos </p>
                </section>
                <section className="sabor-da-pizza">
                    <h1 id="saborDaPizza">Sabor da Pizza</h1>
                </section>
            </Container>
        </div>
    )
}