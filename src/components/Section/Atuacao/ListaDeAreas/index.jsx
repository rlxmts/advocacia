import classNames from "classnames"
import { useEffect, useState } from "react"
import styled from "styled-components"

const ListaDeCards = styled.ul`
  width:100% ;
`

const ItemDeAtuacao = styled.li`

    h5{
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
        padding: 1rem 0;
        border-bottom: 1px solid #DCDCDC;
        cursor: pointer;
        position: relative;
        width: 100%;
        z-index: 1;
        background-color: transparent;
    }
    
    .item-texto {
        height: 0;
        overflow: hidden;
        transition: .6s;
    }

    p{  
        transition: .5s;
        line-height: 1.2rem;
        padding: 2rem 0;
        font-size: 14px;
        font-family: "Lora";
    }
`

const areasDeAtuacao = [
    {
        nome:'Cívil',
        texto: 'Para buscar a melhor estratégia (que nem sempre está na via judicial), cada vez mais se faz necessário que o advogado conheça a necessidade comercial de seu cliente, o mercado de atuação e  as consequências dos litígios para o negócio, propondo soluções criativas e inovadoras.'
    },
    {
        nome:'Contratos',
        texto: 'De forma pragmática e atenta, compreendemos o contexto do negócio jurídico a ser celebrado, antevendo cada etapa, orientando e resguardando os interesses de nossos clientes. Também prestamos assessoria pós-contratual (gerenciamento de contratos) e auxiliamos empresas estrangeiras no Brasil para estruturação de seus negócios com fornecedores, parceiros comerciais e clientes.'
    },
    {
        nome:'Família & Sucessões',
        texto: 'Nossa atuação envolve elaboração, orientação e implementação de planejamentos patrimoniais e sucessórios, testamentos, doações e partilhas em vida. No âmbito contencioso, atuamos na representação de clientes em divórcios, dissoluções de união estável e partilhas de bens, além de revisão, exoneração e execução de alimentos. Também damos assistência em ações de guarda e regulamentação de visita de menores.'
    },
    {
        nome:'Imobiliário',
        texto: 'Nosso time entende os desafios legais e regulatórios do setor imobiliário e apresenta soluções jurídicas para uma gestão eficaz. Prestamos consultoria a locadores e locatários no âmbito comercial.'
    },
    {
        nome:'Penal Empresarial',
        texto: 'Atuamos de forma preventiva na proteção dos interesses da empresa no que se refere à ocorrência de crimes empresariais, corrupção e outras irregularidades advindas da conduta de terceiros, bem como em investigações de processos criminais relacionados à prática de crimes econômicos, financeiros, tributários, eleitorais e digitais'
    },
    {
        nome:'Previdenciário',
        texto: 'O planejamento previdenciário permite identificar o melhor momento para a aposentadoria e até mesmo a forma mais vantajosa. Conte com nossa equipe para uma aposentadoria segura e mais benéfica.'
    },
    {
        nome:'Relações de Consumo',
        texto: 'Com a mudança no comportamento social atrelada ao uso da tecnologia, a legislação consumerista merece grande atenção por parte das empresas. Auxiliamos na adequação dos procedimentos de acordo com o Código de Defesa do Consumidor, a fim de evitar autuação administrativa e/ou judicial. Também representamos clientes perante o Ministério Público, Órgãos de Defesa do Consumidor e órgãos regulatórios.'
    },
    {
        nome:'Societário',
        texto: 'Auxiliamos nas operações empresariais de constituição da empresa e na organização da sociedade. Apresentamos estratégias que visam a proteção dos interesses dos sócios e a diminuição de conflitos, garantindo a continuidade da empresa.'
    },
    {
        nome:'Trabalhista',
        texto: 'Sendo o Direito do Trabalho um ponto essencial na estruturação das empresas, prestamos assessoria de forma preventiva a conflitos, de acordo com a legislação trabalhista. Realizamos mediação de acordos, levantamento e análise de passivo e patrocinamos ações trabalhistas em todas as instâncias.'
    },
    {
        nome:'Tributário',
        texto: 'A legislação complexa e as alterações do sistema de tributação desafiam as empresas na tomada de decisões fiscais estratégicas. Nossa equipe experiente e atualizada oferece apoio no planejamento tributário, revisão fiscal, obtenção de certidão negativa de débito e defesa em processo administrativo e judicial.'
    }
]


const ListaDeAreas = () =>{

    const [ativo, setAtivo] = useState(null)

    function fechaLeitura(){
        const divParagrafo = document.querySelectorAll('.item-texto');
        divParagrafo.forEach( item => {
            item.style.height = '0';
        })
    }

    function ativaLeitura(elemento){
        const li = elemento.parentElement;
        const divParagrafo = li.querySelector('.item-texto');
        const alturaParagrafo = li.querySelector('p').scrollHeight;
        
        if(ativo === li) {
            divParagrafo.style.height = '0';
            setAtivo(null);
        }else{
            fechaLeitura();       
            divParagrafo.style.height = `${alturaParagrafo}px`;   
            setAtivo(li)       
        }       
    }
    

    return(
        
        <ListaDeCards>
            {areasDeAtuacao.map( item => {
                return(
                    <ItemDeAtuacao key={item.nome} onClick={(e) => ativaLeitura(e.target)}>
                        <h5>{item.nome}</h5>
                        <div  className='item-texto'>
                            <p>{item.texto}</p>                    
                        </div>
                    </ItemDeAtuacao>
                )
            })}
        </ListaDeCards>
    )
}

export default ListaDeAreas;