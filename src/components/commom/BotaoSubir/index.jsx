import { MdOutlineArrowDropUp } from "react-icons/md";
import styled from "styled-components";
import { useScrollY } from "../../../Hooks/useScrollY";
import { useEffect, useState } from "react";

const BotaoScrollTop = styled.div`
    
    background-color: #082039;
    position: fixed;
    z-index: 1;
    right: 15px;
    bottom: -100%;
    transition: 1s;
    display: block;
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 10px #00000070;
    border-radius: 5px;
    cursor: pointer;

    &.mostra-bt{
        bottom: 70px;
    }

    div{
        width: 100%;
        height:100%;
        display: grid;
        place-items: center;
    }
`

const BotaoSubir = () => {

    const [scrollTop, setScrollTop] = useState(false);

    useEffect( ()=>{

        const scrolltoggle = () =>{
            window.scrollY > 500 ? setScrollTop(true) : setScrollTop(false);
        }

        window.addEventListener('scroll' , scrolltoggle);

        return()=> window.removeEventListener('scroll', scrolltoggle);

    }, [])

    const subirAoTopo = ()=> {
        window.scrollTo(0,0);
    }

    return(
        <BotaoScrollTop 
            className={scrollTop ? 'mostra-bt' : ''}
            onClick={subirAoTopo}
        >
            <div>
                <MdOutlineArrowDropUp fill="#FFFFFF" size={20} />
            </div>
        </BotaoScrollTop>
    )
}

export default BotaoSubir;