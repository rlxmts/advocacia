import styled from "styled-components";
import Menu from "../../Section/Menu";
import Botao from "../../commom/Botao";
import Logo from "../../commom/Logo";
import BotaoMenu from "../../commom/BotaoMenu";
import { useScrollY } from "../../../Hooks/useScrollY";
import { Container } from "../../commom/Container";

const Header = styled.header`
    padding: 2rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid #ffffff24;
    z-index: 99999;
    transition: .7s;

    .header-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &.cabecalho{
      background-color: #FFFFFF;
      padding: 1rem 1.5rem;
      box-shadow: 0px 0px 3px #00000070;

      .wppMenu{
        color: #012340 !important;
        border-color: #012340!important;
      }
    }    
    
    @media screen and (max-width: 768px){
        padding: 1rem 0;

        &.cabecalho{
          padding: .5rem 0;
        }

        .cabecalho-wpp{
            display: none;
        }
    }
`
const ContainerNav = styled.div`
    display: flex;
    align-items: center;

    @media screen and( max-width: 768px){
      .abrir-menu-mobile{
        height: 100vh;
      }
    }
`
const BotaoPular = styled.a`
  position: absolute;
  font-size: 1px;
  top: -1px;
  color: transparent;
`

const Cabecalho = ()=> {
    const scrollDown = useScrollY();  
    return(
      <Header className={ scrollDown ? 'cabecalho' : ''}>
        <Container className="header-container">
          <BotaoPular href="#conteudo-principal">Pular Navegacão</BotaoPular>
          <Logo />
          <BotaoMenu />
          <ContainerNav>
              <Menu/>
              <Botao classe={['cabecalho-wpp','wppMenu']} href='https://wa.me/5521991537608'> WhatsApp </Botao>
          </ContainerNav>
        </Container>
      </Header>
    )
}
export default Cabecalho;