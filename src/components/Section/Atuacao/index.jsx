import styled from "styled-components";
import { Container } from "../../commom/Container";
import { Subtitulo } from "../../commom/Subtitulo";
import { TituloMaior } from "../../commom/TituloMaior";
import { Paragrafo } from "../../commom/Paragrafo";
import Botao from "../../commom/Botao";
import ListaDeAreas from "./ListaDeAreas";

const SecaoAtuacao = styled.section`
    background-color: #fbfbfb;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        padding: 1rem 2rem;
        max-width: 300px;
    }

    .atuacao-titulo{
        text-align: center;
        margin: 5rem 0 2rem 0;
    }

    .atuacao-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: start;

        .paragrafos{
            p:nth-child(1){
                margin-bottom: 1rem;
            }
        }
    }
`

const Atuacao = () =>{
    return(
        <SecaoAtuacao id="atuacao">
            <Container className="atuacao-container">
                <Subtitulo>Atuação</Subtitulo>
                <TituloMaior>Assessoria jurídica multidisciplinar</TituloMaior>
                <div className="paragrafos">
                    <Paragrafo>Atendemos nossos clientes em todas as áreas do direito essenciais para o bom funcionamento da empresa: cível, contratual, trabalhista, tributário e societário.</Paragrafo>
                    <Paragrafo>Também é possível contar com o Melo Vianna Advogados nas áreas do direito de família e sucessões, penal empresarial e previdenciário.</Paragrafo>
                </div>
                <ListaDeAreas />
            </Container>
            <TituloMaior className="atuacao-titulo">Vamos Trabalhar Juntos?</TituloMaior>
            <Botao branco={false}> Fale com a gente</Botao>
        </SecaoAtuacao>
    )
}

export default Atuacao;