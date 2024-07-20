import styled from "styled-components";
import Menu from "../../Section/Menu";
import Botao from "../../commom/Botao";
import Logo from "../../commom/Logo";
import classNames from "classnames";
import BotaoMenu from "../../commom/BotaoMenu";

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1280px;
    border-bottom: 1px solid #ffffff24;
    z-index: 99999;
    transition: .7s;
    
    @media screen and (max-width: 768px){
        height: 70px;
        padding: 0 1rem;

        .cabecalho-wpp{
            display: none;
        }
    }
`
const ContainerNav = styled.div`
    display: flex;
    align-items: center;
`

const BotaoPular = styled.a`
  position: absolute;
  font-size: 1px;
  top: -1px;
  color: transparent;
`

const Cabecalho = ({cor, classe, classeMenu})=> {

    return(
      <Header className={classNames(classe)}>
        <BotaoPular href="#conteudo-principal">Pular Navegacão</BotaoPular>
        <Logo cor={cor} />
        <BotaoMenu classe={classeMenu} />
        <ContainerNav>
            <Menu />
            <Botao classe='cabecalho-wpp' href='https://wa.me/5521991537608'> WhatsApp </Botao>
        </ContainerNav>
      </Header>
    )
}

export default Cabecalho;