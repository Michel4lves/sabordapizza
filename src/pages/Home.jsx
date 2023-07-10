import "../sass/pages/home.sass"

import banner from "../img/banner.jpg"
import Container from "../components/container/Container"
import PromotionCard from "../components/cards/PromotionCard"

import pizzaTwo from "../img/pizza-two.png"
import pizzafamilySoda from "../img/pizzas-family-soda.png"
import pizzafamily from "../img/pizzas-family.png"
import pizzaBig from "../img/pizzas-big.png"
import saborDaPizza from "../img/sabor-da-pizza.jpg"

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
                    <p className="obs">* Taxa de entrega não inclusa; Promoções não cumulativas; Sabores tradicionais </p>
                    <p className="obs">**Sabores Premium, Doces e Bordas não Inclusos </p>
                </section>
                <section className="about">
                    <h1 id="saborDaPizza">Sabor da Pizza</h1>
                    <div className="sabor-da-pizza">
                        <p className="presentation-text">
                            Bem-vindos ao Sabor da Pizza, onde a excelência e a paixão pela pizza se encontram! <br/> <br/>
                            Somos uma pizzaria que tem como compromisso oferecer a você uma experiência gastronômica única, com sabores irresistíveis e ingredientes cuidadosamente selecionados. <br/> <br/>
                            Nossa missão é levar até você as melhores pizzas da cidade, garantindo qualidade excepcional em cada fatia. Para isso, nossa massa é feita artesanalmente na hora, resultando em uma textura perfeita que derrete na boca. Utilizamos temperos naturais, provenientes de ingredientes frescos e de alta qualidade, para realçar o sabor de cada pizza. <br/> <br/>
                            Queremos que você desfrute de uma refeição quentinha e saborosa no conforto da sua casa. Nossa equipe de entregadores está pronta para levar a melhor pizza da cidade diretamente até você. <br/> <br/>
                            Conte conosco para tornar seus momentos especiais ainda mais memoráveis, seja em um jantar em família, uma comemoração com amigos ou até mesmo em um momento de relaxamento e indulgência pessoal.
                        </p>
                        <img src={saborDaPizza} alt="sabor_da_pizza.jpg" className="sabor-da-pizza-img" />
                    </div>
                </section>
            </Container>
        </div>
    )
}