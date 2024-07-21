import styled from "styled-components";
import { Container } from "../../commom/Container";
import LinksRapidos from "./LinksRapidos";
import RedesSociais from "./RedesSociais";

const Footer = styled.footer`
    box-shadow: 0px 0px 3px #00000070;
    background-color: #012340;
    padding: 5rem 0;

    .caixa-logo{
        width: 100%;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 1rem;

        img{
            max-width: 130px;
        }
    }

    .caixa-listas{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem;
        padding-top: 3rem;
    }

    .caixa-listas span{
        max-width: 200px;
        color: #FFFFFF;
    }

    .credito{

        display: flex;
        align-items: start;
        gap: 10px;

        img{
            max-width: 70px;
        }
    }
`

const Rodape = () => {
    return(
        <Footer>
            <Container>
                <div className="caixa-logo">
                    <img src="./imagens/logo-branca.png" alt="Logotipo Horbiti Advogados"/>
                </div>
                <div className="caixa-listas">
                    <LinksRapidos />
                    <RedesSociais />
                    <span> &copy; Copyright - Todos os direitos reservados.</span>
                    <div className="credito">
                        <span>Feito por:</span>
                        <a 
                            href="https://horbiti.vercel.app"
                            target="_blank"
                        >
                            <img src="./logo-horbiti.webp" />
                        </a>
                    </div>
                </div>
            </Container>
        </Footer>
    )
}

export default Rodape;