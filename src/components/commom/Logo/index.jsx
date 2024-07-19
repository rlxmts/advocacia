import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    min-width: 120px;
    img{
        width: 100%;
        max-width: 150px;
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