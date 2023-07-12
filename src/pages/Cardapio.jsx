import PizzaCard from "../components/cards/PizzaCard";
import Container from "../components/container/Container";

import pizza1 from "../img/pizza01.jpg"
import pizza2 from "../img/pizza02.jpg"
import pizza3 from "../img/pizza03.jpg"
import pizza4 from "../img/pizza04.jpg"
import pizza5 from "../img/pizza05.jpg"
import pizza6 from "../img/pizza06.jpg"
import pizza7 from "../img/pizza07.jpg"
import pizza8 from "../img/pizza08.jpg"
import pizza9 from "../img/pizza09.jpg"
import pizza10 from "../img/pizza10.jpg"
import pizza11 from "../img/pizza11.jpg"
import pizza12 from "../img/pizza12.jpg"
import pizza13 from "../img/pizza13.jpg"
import pizza14 from "../img/pizza14.jpg"

import "../sass/pages/cardapio.sass"

export default function Cardapio() {
    return (
        <div>
            <Container customClass="center-container">
                <h1 className="menu-title">Nossas Pizzas</h1>
                <section className="pizza-menu">
                    <PizzaCard
                        image={pizza1}
                        pizzaName="Pizza Mar e Terra"
                        pizzaDescription="Camarão, pedaços de frango grelhado, cogumelos e azeitonas pretas"
                        alert="Novo sabor"
                        price="R$ 45,00"
                    />
                    <PizzaCard
                        image={pizza2}
                        pizzaName="Pizza Creme De Presunto"
                        pizzaDescription="Presunto com catupiry"
                        price="R$ 35,00"
                    />
                    <PizzaCard
                        image={pizza3}
                        pizzaName="Pizza Presunto Serrano"
                        pizzaDescription="Fatias de presunto serrano com toque de manjericão"
                        price="R$ 38,00"
                    />
                    <PizzaCard
                        image={pizza4}
                        pizzaName="Pizza Quatro Carnes"
                        pizzaDescription="Quatro segmentos de pura carne: presunto, bacon, chouriço e salame"
                        alert="Novo sabor"
                        price="R$ 52,50"
                    />
                    <PizzaCard
                        image={pizza5}
                        pizzaName="Pizza Chilena"
                        pizzaDescription="Carne moída, cebola e tomate"
                        price="R$ 36,50"
                    />
                    <PizzaCard
                        image={pizza6}
                        pizzaName="Pizza Margarida"
                        pizzaDescription="Molho de tomate com mussarela"
                        price="R$ 34,00"
                    />
                    <PizzaCard
                        image={pizza7}
                        pizzaName="Pizza Quatro Queijos"
                        pizzaDescription="Mistura de quatro queijos para dar um sabor inesquecível"
                        alert="Novo sabor"
                        price="R$ 48,50"
                    />
                    <PizzaCard
                        image={pizza8}
                        pizzaName="Pizza Três Marias"
                        pizzaDescription="Escolha três entre: presunto, bacon, salame, pimentão vermelho ou verde, cogumelos, cebola, tomate, azeitona preta ou milho"
                        price="R$ 38,00"
                    />
                    <PizzaCard
                        image={pizza9}
                        pizzaName="Pizza Salmão"
                        pizzaDescription="Tiras de salmão com catupiry"
                        price="R$ 64,00"
                    />
                    <PizzaCard
                        image={pizza10}
                        pizzaName="Pizza Campestre"
                        pizzaDescription="Presunto, pimentão roxo ou verde, cogumelos e azeitonas pretas"
                        price="R$ 42,00"
                    />
                    <PizzaCard
                        image={pizza11}
                        pizzaName="Pizza Salame"
                        pizzaDescription="Salame, cebola, tomate e azeitonas pretas"
                        price="R$ 37,00"
                    />
                    <PizzaCard
                        image={pizza12}
                        pizzaName="Pizza Frango Tropical "
                        pizzaDescription="Pedaços de peito de frango, tomate, cogumelos e manjericão"
                        price="R$ 44,50"
                    />
                    <PizzaCard
                        image={pizza13}
                        pizzaName="Pizza Havaiana"
                        pizzaDescription="Presunto e abacaxi"
                        price="R$ 33,50"
                    />
                    <PizzaCard
                        image={pizza14}
                        pizzaName="Pizza Pepperoni"
                        pizzaDescription="Pepperoni com um toque de manjericão"
                        price="R$ 48,50"
                    />
                </section>
            </Container>
        </div>
    )
}