import styled from "styled-components";
import { Container } from "../../commom/Container";
import { Paragrafo } from "../../commom/Paragrafo";
import { Subtitulo } from "../../commom/Subtitulo";

const ElementHistoria = styled.div`
    
    .Sobre-container{
        display: flex;
        align-items: center;
        padding: 10rem 2rem;
        gap: 2rem;
    }
`

const CaixaParagrafos = styled.div`
    
    display:  flex;
    flex-direction: column;
    gap: 1.6rem;
`

const Historia = () => {
    return(
        <ElementHistoria>
            <Container className="Sobre-container">
                <div>
                    <Subtitulo>Sobre Nós</Subtitulo>
                    <h3>Melo Vianna: jurídico moderno, descomplicado, transparente e com foco em resultados</h3>
                </div>
                <CaixaParagrafos>
                    <Paragrafo>
                        A crença do Melo Vianna Advogados é desenvolver soluções jurídicas adequadas, inovadoras e que contribuam com a evolução dos negócios dos clientes.
                    </Paragrafo> 
                    <Paragrafo>
                        Atuamos em âmbito nacional de forma consultiva e contenciosa, auxiliando as empresas na prevenção de riscos, negociações, pré-litígio e defesa nas esferas administrativa, judicial e arbitral.
                    </Paragrafo>
                    <Paragrafo>
                        Estamos fortemente preparados para atender demandas estratégicas que envolvam alto valor e risco, bem como demandas repetitivas, com ênfase em e-commerce e imobiliário.
                    </Paragrafo>
                    <Paragrafo>
                        Melo Vianna também é especializado em assessoria a multinacionais nos trâmites para abertura de filiais brasileiras em todo o território nacional.
                    </Paragrafo>

                </CaixaParagrafos>
            </Container>
        </ElementHistoria>
    )
}

export default Historia;