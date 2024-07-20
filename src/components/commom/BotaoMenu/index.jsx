import styled from "styled-components";

const Button = styled.div`
    display: none !important;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        height: 2px;
        width: 20px;
        background-color: #FFFFFF;
        position: relative;
        transition: .6s;
        
        &::before, &::after{
            transition: .6s;
            content: '';
            display: block;
            height: 2px;
            width: 20px;
            background-color: #ffffff;
            position: absolute;
        }
    
        &::before{
            bottom: 5px;
        }
    
        &::after{
            top: 5px;
        }
    }


    @media screen and (max-width: 768px){
        display: flex !important;
    }
`

const BotaoMenu = ({classe, aoClicar}) => {

    return(
        <Button onClick={aoClicar}>
            <span className={classe}></span>
        </Button>
    )
}

export default BotaoMenu;