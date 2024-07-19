import styled from "styled-components";
import { Container } from "../../commom/Container";
import { Paragrafo } from "../../commom/Paragrafo";
import { Subtitulo } from "../../commom/Subtitulo";
import { TituloMaior } from "../../commom/TituloMaior";

const ElementHistoria = styled.div`
    
    .Sobre-container{
        display: flex;
        padding: 10rem 2rem;
        gap: 2rem;
    }

    @media screen and (max-width: 768px){
        .Sobre-container{
            flex-direction: column;

            h4{
                width: 100%;
            }
        }
    }
`

const CaixaParagrafos = styled.div`
    
    display:  flex;
    flex-direction: column;
    gap: 1.6rem;
`

const CaixaTitulos = styled.div`
    display:  flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 50%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

const Historia = () => {
    return(
        <ElementHistoria  id="sobre">
            <Container className="Sobre-container">
                <CaixaTitulos>
                    <Subtitulo>Sobre Nós</Subtitulo>
                    <TituloMaior>Horbiti: jurídico moderno, descomplicado, transparente e com foco em resultados</TituloMaior>
                </CaixaTitulos>
                <CaixaParagrafos>
                    <Paragrafo>
                        A crença da Horbiti Advogados é desenvolver soluções jurídicas adequadas, inovadoras e que contribuam com a evolução dos negócios dos clientes.
                    </Paragrafo> 
                    <Paragrafo>
                        Atuamos em âmbito nacional de forma consultiva e contenciosa, auxiliando as empresas na prevenção de riscos, negociações, pré-litígio e defesa nas esferas administrativa, judicial e arbitral.
                    </Paragrafo>
                    <Paragrafo>
                        Estamos fortemente preparados para atender demandas estratégicas que envolvam alto valor e risco, bem como demandas repetitivas, com ênfase em e-commerce e imobiliário.
                    </Paragrafo>
                    <Paragrafo>
                        A Horbiti também é especializado em assessoria a multinacionais nos trâmites para abertura de filiais brasileiras em todo o território nacional.
                    </Paragrafo>
                </CaixaParagrafos>
            </Container>
        </ElementHistoria>
    )
}

export default Historia;