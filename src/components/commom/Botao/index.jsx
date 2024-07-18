import styled from "styled-components";

const BotaoEstilizado = styled.a`
    padding: .5rem 1rem;
    border-radius: 5px;
    font-family: "RobotoMedium";
    cursor: pointer;
    display: block;
    width: 100%;
    max-width: 200px;
    text-align: center;
`

const Botao = ({ children, branco=true, href })=> {

    const corLink = branco ? "#FFFFFF" : "#000000";
    
    return(
        <BotaoEstilizado 
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