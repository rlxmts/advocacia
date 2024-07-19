import styled from "styled-components";

export const Links = styled.a`
    font-size: 13px;
        margin-left: 15px;
        position: relative;
        color: #FFFFFF;

        &::before {
            content: '';
            display: block;
            width: 18px;
            height: 20px;
            background-image: url('./imagens/arrow.svg');
            background-size: contain;
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
        }
`