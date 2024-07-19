import styled from "styled-components";

const Card = styled.div`
    display: block;
    padding: 8rem 1rem 1rem 1rem;
    width: 20%;
    text-align: center;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    
    &::after{
        transition: .6s;
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: rgb(0, 0, 0);
        background: linear-gradient(180deg, rgba(1, 16, 64, 0.322) 64%, rgb(21 21 21) 100%);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 10px;
    }

    h3{
        font-size: 14px;
        color: #FFFFFF;
        position: relative;
        letter-spacing: 2px;
        z-index: 1;
        transition: .6s;
    }

    &:hover::after{
        background: #0000007d;
        background: linear-gradient(180deg, rgba(1, 16, 64, 0.322) 0%, rgba(0,7,24,1) 100%);

    }

    &:hover h3{
        transform: translateY(-20px);
    }
`

const CardSegmentos = ({children, imagem}) => {
    return(
        <Card style={ { backgroundImage:`url(./imagens/cards/${imagem}.webp)`} }>
            <h3>{children}</h3>
        </Card>
    )
}

export default CardSegmentos;