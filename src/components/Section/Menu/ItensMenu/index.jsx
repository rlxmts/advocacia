import styled from "styled-components";

const Item = styled.li`

    min-width: 90px;

    a{  
        text-align: center;
        display: block;
        padding: .5rem;
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: 13px;
        font-family: "RobotoMedium";
        transition: .3s;

        &:hover {
            opacity: .7;
        }
    }

    @media screen and (max-width: 768px){
        a{
            font-size: 1.7rem;
            letter-spacing: 2px;
        }
    }
`
const linksMenu = [
    {
        nome: 'Home',
        link: '#inicio'
    },
    {
        nome: 'Sobre Nós',
        link: '#sobre'
    },
    {
        nome: 'Segmentos',
        link: '#segmentos'
    },
    {
        nome: 'Atuação',
        link: '#atuacao'
    },
    {
        nome: 'Contato',
        link: '#contato'
    }
]

const ItensMenu = ({aoClicar})=> {

    return(
        linksMenu.map( item => 
            <Item key={item.link}>
                <a onClick={aoClicar} href={item.link}>{item.nome}</a>
            </Item>
        )  
    )
}

export default ItensMenu;