import styled from "styled-components";
import { useScrollY } from "../../../Hooks/useScrollY";
import { useContext } from "react";
import { MenuMobileContext } from "../../../context/MenuMobileContext";

const Div = styled.div`
    width: 100%;
    min-width: 120px;
    img{
        width: 100%;
        max-width: 150px;
    }

    @media screen and (max-width: 686px){
        img{
            max-width: 100px;
        }
    }
`

const Logo = ()=>{
    const scrollDown = useScrollY();
    const {menuVisible} = useContext(MenuMobileContext);
    const logo = scrollDown || menuVisible ? 'preta' : 'branca'
    return(
        <Div>
            <img src={`./imagens/logo-${logo}.png`} alt="Logo Horbiti Advogados"/>
        </Div>
    )
}
export default Logo;