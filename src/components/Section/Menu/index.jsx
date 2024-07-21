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
            height: 100%;
        }
    }
`
const Menu = ({classe})=> {
    return(
        <Nav>
            <ul className={classe}>
                <ItensMenu />
            </ul>
        </Nav>
    )
}
export default Menu;