import styled from "styled-components";
import { useScrollY } from "../../../../Hooks/useScrollY";

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

    .linkScroll{
        color: #012340;
    }

    @media screen and (max-width: 768px){
        a{
            font-size: 1.7rem;
            letter-spacing: 2px;
        }

        .linkScroll{
            color: #FFF ;
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

    const scrollDown = useScrollY();
    const menuScroll = scrollDown ? 'linkScroll' : '';

    return(
        linksMenu.map( item => 
            <Item key={item.link}>
                <a 
                    className={menuScroll}
                    onClick={aoClicar} 
                    href={item.link}
                >
                    {item.nome}
                </a>
            </Item>
        )  
    )
}

export default ItensMenu;