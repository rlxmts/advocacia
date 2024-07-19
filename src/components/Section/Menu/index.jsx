import styled from "styled-components";
import ItensMenu from "./ItensMenu";

const Nav = styled.nav`
    width: 100%;

    ul{
        width: 100%;
        transition: .7s;
        display: flex;
    }

    @media screen and (max-width: 768px){

        ul{
            position: fixed;
            z-index: 999;
            flex-direction: column;
            background-color: #1b1d1f;
            height: 100vh;
            top: 70px;
            width: 100vw;
            left: 0;
            justify-content: center;
            transform: translateY(-150%);
        }
    }
`
const Menu = ()=> {
    return(
        <Nav>
            <ul>
                <ItensMenu />
            </ul>
        </Nav>
    )
}

export default Menu;