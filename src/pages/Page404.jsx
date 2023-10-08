import Container from "../components/container/Container";

import "../sass/pages/Page404.sass"

import emptyBox from "../img/empty-box.png"
import LinkButton from "../components/buttons/LinkButton";

export default function Page404() {
    return (
        <div>
            <Container customClass="center-container">
                <div className="page404">
                    <div className="imgBx">
                        <img src={emptyBox} alt="emptyBox" />
                        <div className="error">
                            <div>4</div>
                            <div>0</div>
                            <div>4</div>
                        </div>
                    </div>
                    <h1>Oops! Página não encontrada.</h1>
                    <LinkButton title="Voltar a Home" to="/sabordapizza/" customClass="Link-button" />
                </div>
            </Container>
        </div>
    )
}