import styled from "styled-components";
import { useScrollY } from "../../../Hooks/useScrollY";
import classNames from "classnames";
import { useContext } from "react";
import { MenuMobileContext } from "../../../context/MenuMobileContext";

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

    .troca-cor {
        background-color: #000;
    
        &::before, &::after{
            background-color: #000;
        }
    }
    
    @media screen and (max-width: 768px){
        display: flex !important;
    }
    `

const BotaoMenu = ({classe}) => {    

    const scrollDown = useScrollY();
    const spanscroll = scrollDown ? 'troca-cor' : '';
    
    const {menuToggle} = useContext(MenuMobileContext);

    return(
        <Button onClick={menuToggle}>
            <span className={classNames(classe, spanscroll)}></span>
        </Button>
    )
}
export default BotaoMenu;