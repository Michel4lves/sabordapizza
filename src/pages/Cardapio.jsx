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
                        alert="Novo"
                        mediumPrice="45,90"
                        largePrice="62,90"
                        familyPrice="74,90"
                    />
                    <PizzaCard
                        image={pizza2}
                        pizzaName="Pizza Creme De Presunto"
                        pizzaDescription="Presunto com catupiry"
                        alert="Normal"
                        mediumPrice="43,00"
                        largePrice="60,00"
                        familyPrice="72,00"
                    />
                    <PizzaCard
                        image={pizza3}
                        pizzaName="Pizza Presunto Serrano"
                        pizzaDescription="Fatias de presunto serrano com toque de manjericão"
                        alert="Normal"
                        mediumPrice="43,00"
                        largePrice="60,00"
                        familyPrice="72,00"
                    />
                    <PizzaCard
                        image={pizza4}
                        pizzaName="Pizza Quatro Carnes"
                        pizzaDescription="Quatro segmentos de pura carne: presunto, bacon, chouriço e salame"
                        alert="Premiun"
                        mediumPrice="45,90"
                        largePrice="62,90"
                        familyPrice="74,90"
                    />
                    <PizzaCard
                        image={pizza5}
                        pizzaName="Pizza Chilena"
                        pizzaDescription="Carne moída, cebola e tomate"
                        alert="Normal"
                        mediumPrice="45,90"
                        largePrice="62,90"
                        familyPrice="74,90"
                    />
                    <PizzaCard
                        image={pizza6}
                        pizzaName="Pizza Margarida"
                        pizzaDescription="Molho de tomate com mussarela"
                        alert="Normal"
                        mediumPrice="44,90"
                        largePrice="60,90"
                        familyPrice="72,90"
                    />
                    <PizzaCard
                        image={pizza7}
                        pizzaName="Pizza Quatro Queijos"
                        pizzaDescription="Mistura de quatro queijos para dar um sabor inesquecível"
                        alert="Novo"
                        mediumPrice="45,90"
                        largePrice="62,90"
                        familyPrice="74,90"
                    />
                    <PizzaCard
                        image={pizza8}
                        pizzaName="Pizza Salmão"
                        pizzaDescription="Tiras de salmão com catupiry"
                        alert="Premiun"
                        mediumPrice="48,90"
                        largePrice="66,90"
                        familyPrice="77,90"
                    />
                    <PizzaCard
                        image={pizza9}
                        pizzaName="Pizza Campestre"
                        pizzaDescription="Presunto, pimentão roxo ou verde, cogumelos e azeitonas pretas"
                        alert="Normal"
                        mediumPrice="44,00"
                        largePrice="61,00"
                        familyPrice="71,00"
                    />
                    <PizzaCard
                        image={pizza10}
                        pizzaName="Pizza Salame"
                        pizzaDescription="Salame, cebola, tomate e azeitonas pretas"
                        alert="Normal"
                        mediumPrice="45,90"
                        largePrice="62,90"
                        familyPrice="74,90"
                    />
                    <PizzaCard
                        image={pizza11}
                        pizzaName="Pizza Frango Tropical "
                        pizzaDescription="Pedaços de peito de frango, tomate, cogumelos e manjericão"
                        alert="Normal"
                        mediumPrice="45,00"
                        largePrice="60,00"
                        familyPrice="70,00"
                    />
                    <PizzaCard
                        image={pizza12}
                        pizzaName="Pizza Pepperoni"
                        pizzaDescription="Pepperoni com um toque de manjericão"
                        alert="Premiun"
                        mediumPrice="46,90"
                        largePrice="63,90"
                        familyPrice="76,90"
                    />
                </section>
            </Container>
        </div>
    )
}