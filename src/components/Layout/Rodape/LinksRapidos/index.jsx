import styled from "styled-components";

const ListaDeLinks = styled.ul`

    display: flex;
    flex-direction: column;
    gap: .5em;
    min-width: 250px;

    li a {
        font-size: 13px;
        margin-left: 15px;
        position: relative;
        color: #FFFFFF;

        &::before {
            content: '';
            display: block;
            width: 18px;
            height: 20px;
            background-image: url('./imagens/arrow.svg');
            background-size: contain;
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
`

const LinksRapidos = ()=>{
    return(
        <ListaDeLinks>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#segmentos">Segmentos</a></li>
            <li><a href="#atuacao">Atuação</a></li>
            <li><a href="#contato">Contato</a></li>
        </ListaDeLinks>
    )
}

export default LinksRapidos;