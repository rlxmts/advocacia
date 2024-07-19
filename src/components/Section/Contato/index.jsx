import styled from "styled-components";
import { Container } from "../../commom/Container";
import { TituloMaior } from "../../commom/TituloMaior";
import { Subtitulo } from "../../commom/Subtitulo";
import { Paragrafo } from "../../commom/Paragrafo";
import Formulario from "../../commom/Formulario";

const SecaoContato = styled.section`
    
    padding: 10rem 0;

    h2,h4,p{
        text-align: center;
    }

    .container-contato{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contato-textos{
        margin: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

const Informacoes = styled.div`

    span{
        display: block;
        font-family: "RobotoMedium";
        font-size: 14px;
        letter-spacing: 1px;
        color: #777777;
    }
    
`

const Contato = ()=>{
    return(
        <SecaoContato id="contato"> 
            <Container className="container-contato">
                <div className="contato-textos">
                    <Subtitulo>Contato</Subtitulo>
                    <TituloMaior>Deseja ser atendido por nós?</TituloMaior>
                    <Paragrafo>Carla Melo Vianna e seus advogados associados colocam sua expertise à disposição da sua empresa. Entre em contato.</Paragrafo>
                </div>
                <Formulario />
                <Informacoes>
                    <Paragrafo>Av. Bem vindo de Morais, 1122 - Sala 554 - Barra Plaza - Rio de Janeiro</Paragrafo>
                    <span>(21) 99153-7608</span>
                </Informacoes>
            </Container>
        </SecaoContato>
    )
}

export default Contato;