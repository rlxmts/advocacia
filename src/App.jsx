import Cabecalho from "./components/Layout/Cabecalho"
import Segmentos from "./components/Section/Segmentos"
import Sobre from "./components/Section/Sobre"
import Banner from "./components/Section/Banner"
import SecaoLogo from "./components/Section/SecaoLogo"
import Atuacao from "./components/Section/Atuacao"
import Contato from "./components/Section/Contato"
import Rodape from "./components/Layout/Rodape"
import { useEffect, useState } from "react"
import styled from "styled-components"
import classNames from "classnames"

const ContainerApp = styled.div`

  .cabecalho-ativo {
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px #00000070;
  }

  .botao-menu-preto{
    background-color: #000000;

    &::after, &::before{
      background-color: #000000;
    }
  }
  
`

function App() {

  const [cabecalhoAtivo, setCabecalhoAtivo] = useState('');
  const [corLogo, setCorLogo] = useState('branca');
  const [corBotao, setCorBotao] = useState('');
  const [animaBotao, setAnimaBotao] = useState('');
  
  useEffect( ()=> {

    function alterarHeader(){
      window.scrollY > 0 ? 
      setCabecalhoAtivo('cabecalho-ativo') & setCorLogo('preta') & setCorBotao('botao-menu-preto')
      : setCabecalhoAtivo('') & setCorLogo('branca') & setCorBotao('');
    }

    window.addEventListener('scroll', alterarHeader);

    return () => {
      window.removeEventListener('scroll', alterarHeader);
    };



  }, [])

  const classesBotaoMenu = classNames(corBotao, animaBotao);

  return (
    <ContainerApp>
    <Cabecalho 
      classe={cabecalhoAtivo} 
      cor={corLogo} 
      classeMenu={classesBotaoMenu}
    />
    <Banner />
    <Sobre />
    <SecaoLogo />
    <Segmentos />
    <Atuacao />
    <SecaoLogo />
    <Contato />
    <Rodape />
    </ContainerApp>
  )
}

export default App
