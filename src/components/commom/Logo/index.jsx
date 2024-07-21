import styled from "styled-components";
import { useScrollY } from "../../../Hooks/useScrollY";

const Div = styled.div`
    width: 100%;
    min-width: 120px;
    img{
        width: 100%;
        max-width: 150px;
    }

    @media screen and (max-width: 686px){
        img{
            max-width: 100px;
        }
    }
`

const Logo = ()=>{
    const scrollDown = useScrollY();
    const logo = scrollDown ? 'preta' : 'branca'
    return(
        <Div>
            <img src={`./imagens/logo-${logo}.png`} />
        </Div>
    )
}
export default Logo;