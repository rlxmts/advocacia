import styled from "styled-components"
import { Titulo } from "../../commom/Titulo";

const SecaoBanner = styled.section`
    background: rgb(1,35,64);
    background: linear-gradient(139deg, rgba(1,35,64,1) 40%, rgba(0,7,24,1) 100%);
    min-height: 600px;
    display: flex;
    align-items : center ;
    justify-content:  center;
    padding: 2rem;

    h1{
        font-size: 1px;
        position: absolute;
        top: -9999px;
        color: transparent;
    }
`

const Banner = () => {
    return(
        <SecaoBanner id="inicio">
            <h1 id="conteudo-principal">Horbiti - Advogados</h1>
            <Titulo>Do ponto de vista jurídico e pela ótica econômica, <br></br>
            entendemos o seu negócio e as suas<br></br>
            particularidades.
            </Titulo>
        </SecaoBanner>
    )
}

export default Banner;