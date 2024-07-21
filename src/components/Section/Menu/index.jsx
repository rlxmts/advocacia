import styled from "styled-components";
import ItensMenu from "./ItensMenu";
import { useContext } from "react";
import { MenuMobileContext } from "../../../context/MenuMobileContext";

const Nav = styled.nav`
    width: 100%;

    ul{
        width: 100%;
        transition: .7s;
        display: flex;
    }

    @media screen and (max-width: 768px){

        ul{
            flex-direction: column;
            background-color: #1b1d1f;           
            width: 100vw;         
            justify-content: center;
            position: fixed;
            top: 70px;
            left: 0;
            overflow: hidden;
            height: 0;
        }

        .menu-visivel{
            height: calc(100vh - 70px);
        }
    }
`
const Menu = ()=> {
    const {menuVisible} = useContext(MenuMobileContext);
    return(
        <Nav>
            <ul className={menuVisible ? 'menu-visivel' : ''}>
                <ItensMenu />
            </ul>
        </Nav>
    )
}
export default Menu;