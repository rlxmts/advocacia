import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    max-width: 150px;

    img{
        width: 100%;
    }
`

const Logo = ()=>{
    return(
        <Div>
            <img src='./imagens/logo-branca.png' />
        </Div>
    )
}

export default Logo;