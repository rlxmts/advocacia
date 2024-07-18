import styled from "styled-components";
import ItensMenu from "./ItensMenu";

const Nav = styled.nav`
    width: 100%;
    ul{
        width: 100%;
        display: flex;
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