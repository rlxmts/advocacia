import styled from "styled-components";
import Botao from "../../commom/Botao";
import { Container } from "../../commom/Container";

const SecaoSobre = styled.div`
    min-height: 90vh;
    background-image: url('./imagens/advogado.webp');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;

    .sobre-container{
        width: 100%;
        height: 100%;
    }
`

const ApresentacaoElement = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4{
        color: #FFFFFF;
        font-size: 10px;
        letter-spacing: 7px;
    }

    p{
        font-size: 2rem;
        color: #FFFFFF;
        max-width: 500px;
        font-family: "Lora";
        margin: 2rem 0;
    }

    a{
        padding: 1rem;
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 1.5rem;
        }
    }
`

const Apresentacao = () => {
    return(
        <SecaoSobre>
            <Container className="sobre-container">
                <ApresentacaoElement>
                    <div className="aprentacao-textos">
                        <h4>INOVAÇÃO & ENVOLVIMENTO</h4>
                        <p>Em um fluxo cada vez maior de informações, é preciso discernir o que é útil e, de forma colaborativa, identificar as melhores oportunidades.</p>
                        <Botao href='https://wa.me/5521991537608'>Vamos Conversar?</Botao>
                    </div>
                    <div className="caixa-vazia"></div>
                </ApresentacaoElement>
            </Container>
        </SecaoSobre>    
    )
}

export default Apresentacao;