import Cabecalho from "./components/Layout/Cabecalho"
import Segmentos from "./components/Section/Segmentos"
import Sobre from "./components/Section/Sobre"
import Banner from "./components/Section/Banner"
import SecaoLogo from "./components/Section/SecaoLogo"
import Atuacao from "./components/Section/Atuacao"
import Contato from "./components/Section/Contato"
import Rodape from "./components/Layout/Rodape"
import BotaoWpp from "./components/commom/BotaoWpp"

function App() {
  return (
    <>
    <Cabecalho />
    <main role="main">
      <Banner />
      <Sobre />
      <SecaoLogo />
      <Segmentos />
      <Atuacao />
      <SecaoLogo />
      <Contato />
    </main>
    <BotaoWpp />
    <Rodape />
    </>
  )
}
export default App
