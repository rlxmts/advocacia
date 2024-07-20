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

const ContainerApp = styled.div`

  .cabecalho-ativo {
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px #00000070;
  }
  
`

function App() {

  const [cabecalhoAtivo, setCabecalhoAtivo] = useState('');
  const [corLogo, setCorLogo] = useState('branca');
  
  useEffect( ()=> {

    function alterarHeader(){
      window.scrollY > 0 ? 
      setCabecalhoAtivo('cabecalho-ativo') & setCorLogo('preta')
      : setCabecalhoAtivo('') & setCorLogo('branca');
    }

    window.addEventListener('scroll', alterarHeader);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [])

  return (
    <ContainerApp>
    <Cabecalho classe={cabecalhoAtivo} cor={corLogo}/>
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
