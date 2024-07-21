import styled from "styled-components";
import { keyframes } from "styled-components";

const surgeTexto = keyframes`
    0%{opacity:0; transform: translateY(30px);}
    100%{opacity:1; transform: translate(0);}
`

const Popup = styled.div`

    position: fixed;
    width: 90%;
    max-width: 300px;
    right: 10px;
    bottom: 80px;
    box-shadow: 0px 0px 10px #00000070;
    z-index: 99;
    border-radius: 10px;

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

const BotaoWpp = ()=> {
    return(
        <Popup>
            <div className="popup-cabecalho">
                <div className="avatar">
                    <img src="./favicon.png" />
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
    )   
}

export default BotaoWpp;