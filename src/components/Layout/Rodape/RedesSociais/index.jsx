import styled from "styled-components";
import { Links } from "../../../commom/Links";

const ListaRedes = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .5rem;

`

const RedesSociais = () => {
    return(
        <ListaRedes>
            <li>
                <Links
                    target="_blank"
                     rel="noopener noreferrer"
                     href="https://www.linkedin.com/in/matheusw16/"
                >
                    Linkedin
                </Links>
            </li>
            <li>
                <Links
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/rlxmts"
                >
                    Github
                </Links>
            </li>
            <li>
                <Links
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://horbiti.vercel.app/"
                >
                    Portfólio
                </Links>
            </li>
            <li>
                <Links
                    target="_blank"
                     rel="noopener noreferrer"
                     href="https://wa.me/5521991537608"
                >
                    WhatsApp
                </Links>
            </li>
        </ListaRedes>
    )
}

export default RedesSociais;