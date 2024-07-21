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
    position: relative;    
    
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
            bottom: 4px;
        }
        
        &::after{
            top: 4px;
        }
        
    }

    .anima-bt{
        
        transform: rotate(45deg);
        &::before{
            bottom: 0;
        }

        &::after{
            transform: translateY(-4px) rotate(-90deg);
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
    
    const {menuVisible, menuToggle} = useContext(MenuMobileContext);

    const animaBt = menuVisible ? 'anima-bt' : '';

    return(
        <Button onClick={menuToggle}>
            <span className={classNames(classe, spanscroll, animaBt)}></span>
        </Button>
    )
}
export default BotaoMenu;