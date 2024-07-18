import { createGlobalStyle } from "styled-components";
import Lora from '../fonts/Lora/Lora-VariableFont_wght.ttf';
import Roboto from '../fonts/Roboto/Roboto-Light.ttf';
import RobotoMedium from '../fonts/Roboto/Roboto-Medium.ttf';
import RobotoRegular from '../fonts/Roboto/Roboto-Regular.ttf';
import PlayFair from '../fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf';

export const EstiloGlobal = createGlobalStyle`
    @font-face {
        font-family: "Lora" ;
        src: local('Lora'), url(${Lora});
    }

    @font-face {
        font-family: "Roboto" ;
        src: local('Roboto'), url(${Roboto});
    }

    @font-face {
        font-family: "RobotoRegular" ;
        src: local('RobotoRegular'), local('Roboto Regular'), url(${RobotoRegular});
    }

    @font-face {
        font-family: "RobotoMedium" ;
        src: local('Roboto'), local('Roboto Medium'), url(${RobotoMedium});
    }

    @font-face {
        font-family: "PlayFlair" ;
        src: local('PlayFair'), local('Play Fair'), url(${PlayFair});
    }

    *{
        padding: 0;
        margin: 0;
        list-style: none;
        text-transform: none;
        font-size: 16px;
        color: #000000;
        box-sizing: border-box;
        font-family: "Roboto";
        font-style: none;
        text-decoration: none;
    }
`