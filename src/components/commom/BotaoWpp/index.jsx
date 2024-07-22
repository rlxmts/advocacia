import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

const surgeTexto = keyframes`
    0%{opacity:0; transform: translateY(30px);}
    100%{opacity:1; transform: translate(0);}
`

const Popup = styled.div`
    position: fixed;
    width: 90%;
    max-width: 300px;
    right: 10px;
    bottom: -100%;
    box-shadow: 0px 0px 10px #00000070;
    z-index: 99;
    border-radius: 10px;
    transition: 1s;

    &.popup-ativo {
       bottom: 70px;
    }

    .bt-fechar{
        position: relative;

        .icone{
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
        }
    }

    .popup-cabecalho{
        background-color: #095e54;
        display: flex;
        padding: 1rem;
        gap: 1rem;
        border-radius: 10px 10px 0 0 ;

        .avatar {
            width: 40px;
            border-radius: 50%;
            background-color: #FFF;
            padding: 5px;
            position: relative;
            img{
                width: 100%;
                margin-bottom: -3px;
            }

            &::after{
                content: '';
                width: 5px;
                height: 5px;
                background-color: #095e54;
                border: 1px solid #FFF;
                display: block;
                position: absolute;
                bottom: 3px;
                right: 0px;
                border-radius: 50%;
            }
        }

        .popup-perfil{
            h5, span{
                color: #FFFFFF;
                font-size: 14px;
            }
            span{
                font-size: 13px;
            }
        }
    }

    .popup-body{
        background-image: url('./imagens/wpp-wallpaper.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 150px;
        padding: 1rem;
        
        .body-textos{
            animation: ${surgeTexto} 1s ;
            border-radius: 0 10px 10px 10px;
            background-color: #FFFFFF;
            padding: 1rem;
            position: relative;

            &::before{
                content:'';
                display: block;
                width: 0px;
                height: 0px;
                border-right: 15px solid #FFFFFF;
                border-bottom: 15px solid transparent;
                border-top: 15px solid transparent;
                transform: rotate(270deg);
                position: absolute;
                left: -2px;
                top: -7px;
            }

            h5{
                font-family: "RobotoMedium";
                color: #b5b5b5;
                font-size: 12px;
                margin-bottom: 1rem;
            }
            span{
                font-size: 14px;
            }
        }
    }

    .popup-botao{
        border-radius: 0 0 10px 10px;
        background-color: #FFFFFF;
        padding: 1rem;
        text-align: center;
        a{
            background-color: #4fce5d;
            display: block;
            padding:.5rem;
            color: #FFFFFF;
            cursor: pointer;
            border-radius: 10px;
            font-family: "RobotoMedium";
        }
    }
`
const BotaoWppFlutuante = styled.a`
    position: fixed;
    z-index: 99;
    background-color: #095E54 ;
    display: block;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    right: 10px;
    bottom: 10px;
    box-shadow: 0px 0px 10px #00000070;
    background-image: url('./imagens/wpp.png');
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
`

const BotaoWpp = ()=> {
    
    const [ativaPopup, setAtivaPopup] = useState(false);
    
    useEffect( ()=> {
        const sobePopup = () =>{
            setAtivaPopup(!ativaPopup);
        }
        setTimeout(sobePopup, 5000);

        return () => clearTimeout(sobePopup);
    }, [])

    return(
        <>
            <Popup className={ativaPopup ? 'popup-ativo' : ''}>
                <div className="bt-fechar">
                    <IoMdCloseCircleOutline 
                        onClick={()=> setAtivaPopup(false)}
                        className="icone" 
                        size={20} 
                        fill="#6b9e98" 
                    />
                </div>
                <div className="popup-cabecalho">
                    <div className="avatar">
                        <img src="./favicon.png" alt="imagem perfil horbiti" />
                    </div>
                    <div className="popup-perfil">
                        <h5>Horbiti Advogados</h5>
                        <span>Atendimento digital</span>
                    </div>
                </div>
                <div className="popup-body">
                    <div className="body-textos">
                        <h5>Horbiti Advogados</h5>
                        <span>
                            Olá! <br></br> Como podemos te ajudar?
                        </span>
                    </div>
                </div>
                <div className="popup-botao">
                    <a
                        href="https://wa.me/5521991537608"
                        rel="nooponer noreferrer"
                        target="_blank"
                    >
                        WhatsApp
                    </a>
                </div>
            </Popup>
            <BotaoWppFlutuante                 
                href="https://wa.me/5521991537608"
                rel="noreferrer noopener"
                target="_blank"
            >
            </BotaoWppFlutuante>
        </>
    )   
}

export default BotaoWpp;