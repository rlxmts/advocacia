import styled from "styled-components";
import { Paragrafo } from "../../commom/Paragrafo";
import { Subtitulo } from "../../commom/Subtitulo";
import { TituloMaior } from "../../commom/TituloMaior";
import { Container } from "../../commom/Container";
import CardSegmentos from "./CardSegmentos";
import Botao from "../../commom/Botao";

const SectionSegmentos = styled.section`
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        padding: 1rem 2rem;
        max-width: 300px;
    }
`
const DivTextos = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
const CardsContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 5rem 0;
`

const segmentos = [ 
    {
        nome: 'Saúde',
        imagem: 'saude'
    },
    {
        nome: 'Varejo e Consumo',
        imagem: 'varejo'
    },
    {
        nome: 'Holding Familiar',
        imagem: 'familiar'
    },
    {
        nome: 'Agronegócio',
        imagem: 'agronegocio'
    },
    {
        nome: 'Energia',
        imagem: 'energia'
    },
    {
        nome: 'Industria',
        imagem: 'industria'
    },
    {
        nome: 'Imobiliário',
        imagem: 'imobiliario'
    },
    {
        nome: 'Construção',
        imagem: 'construcao'
    },
]

const Segmentos = () => {
    return(
        <SectionSegmentos id="segmentos">
            <Container>
                <DivTextos>
                    <Paragrafo>
                    Independente do segmento, o objetivo do Melo Vianna Advogados é facilitar e potencializar os negócios e o funcionamento empresarial dos clientes, trazendo segurança aos projetos, operações e decisões em meio à instabilidade do mercado e riscos inerentes à atividade.
                    </Paragrafo>
                    <div>
                        <Subtitulo>Segmentos</Subtitulo>
                        <TituloMaior>Quem são nossos clientes</TituloMaior>
                    </div>
                </DivTextos>
                <CardsContainer>
                    {segmentos.map( item => {
                        return <CardSegmentos imagem={item.imagem} key={item.imagem}>{item.nome}</CardSegmentos>
                    })}
                </CardsContainer>
            </Container>
            <Botao branco={false}>Vamos Conversar?</Botao>
        </SectionSegmentos>
    )
}

export default Segmentos;