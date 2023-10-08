import "../sass/pages/home.sass"

import banner from "../img/banner.jpg"
import marquee from "../img/marquee.png"
import Container from "../components/container/Container"
import PromotionCard from "../components/cards/PromotionCard"

import MakeDelivery from "../img/make-online.png"

import pizzaTwo from "../img/pizza-two.png"
import pizzafamilySoda from "../img/pizzas-family-soda.png"
import pizzafamily from "../img/pizzas-family.png"
import pizzaBig from "../img/pizzas-big.png"
import saborDaPizza from "../img/sabor-da-pizza.jpg"

import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <main className="banner">
                <img src={banner} alt="banmner.jpg" className="banner-img" />
                <img src={marquee} alt="marquee.jpg" className="marquee-img" />
            </main>
            <Container customClass="center-container-home">
                <section className="promotions">
                    <Link to="/sabordapizza/cardapio" className="delivery-button">
                        <img src={MakeDelivery} alt="make-online" />
                    </Link>
                    <h1 id="promocoes">Promoções</h1>
                    <div className="promotion-card-box">
                        <PromotionCard 
                            image={pizzaTwo}
                            title="2 Pizzas Grandes"
                            title2="Entrega Grátis**"
                            text1="Na compra de duas pizzas grandes"
                            text2="a tele entrega sai de graça"
                        />
                        <PromotionCard 
                            image={pizzafamilySoda}
                            title="Pizza Família"
                            title2="Refri 2l*"
                            text1="Compre uma pizza tamanho família"
                            text2="ganhe um refrigerante 2 litros de brinde"
                        />
                        <PromotionCard 
                            image={pizzafamily}
                            title="Pizza Familia"
                            title2="Broto Chocolate***"
                            text1="Escolha um broto doce"
                            text2="no lugar do refrigerante"
                        />
                        <PromotionCard 
                            image={pizzaBig}
                            title="Cupom de Desconto"
                            title2="R$ 10,00"
                            text1='Utilize o cupom "pizza" '
                            text2="e ganhe R$ 10,00 de desconto"
                        />
                    </div>
                    <p className="obs">* Terça a Sexta (Exceto Feriados) </p>
                    <p className="obs">**Sabores Premium não Inclusos </p>
                    <p className="obs">***Somente aos Sábados </p>
                    <p className="obs">Promoções não cumulativas </p>
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