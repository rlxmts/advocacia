import classNames from "classnames";
import styled from "styled-components";

const BotaoEstilizado = styled.a`
    padding: .5rem 1rem;
    font-family: "RobotoMedium";
    cursor: pointer;
    display: block;
    width: 100%;
    max-width: 200px;
    text-align: center;
    transition: .6s;

    &:hover{
        transform: scale(1.1);
    }
`

const Botao = ({ children, branco=true, href, classe })=> {

    const corLink = branco ? "#FFFFFF" : "#000000";
    
    return(
        <BotaoEstilizado 
            className={classNames(classe)}
            href={href} 
            style={ { color: corLink, border:`1px solid ${corLink}` } }
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </BotaoEstilizado>
    )
}

export default Botao;