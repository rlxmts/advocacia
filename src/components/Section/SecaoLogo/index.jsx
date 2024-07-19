import styled from "styled-components"

const FundoLogo = styled.div`
    display: block;
    min-height: 400px;
    background-image: url('./imagens/fundo.webp');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: grid;
    place-items: center;
    position: relative;
    
    &::after{
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(1, 20, 37, 0.76);
    }

    img{
        position: relative;
        z-index: 1;
    }

    @media screen and (max-width: 768px){

        padding: 2rem;

        img{
            max-width: 150px;
        }
    }
`

const SecaoLogo = () => {
    return(
        <FundoLogo>
            <img src="./imagens/logo-branca.png" />
        </FundoLogo>
    )
}

export default SecaoLogo;