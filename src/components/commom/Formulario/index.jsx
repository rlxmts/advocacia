import styled from "styled-components";
import Botao from "../Botao";

const Form = styled.form`
        width: 100%;
        max-width: 500px;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    
        label{
        display: block;
        font-size: 1px;
        color: transparent;
        }

        input,textarea{
            border: 1px solid #dcdcdc;
            padding: 1rem;
        }

        label, input, textarea{
            width: 100%;
            outline: none;
        }
`

const Formulario = () => {
    return(
        <Form>
            <div> 
                <label>Nome</label>
                <input type="text" placeholder="Nome" required/>
            </div>
            <div>
                <label htmlFor="tel">Telefone</label>
                <input id="tel" type="tel" placeholder="Nome" required/>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="E-mail" />
            </div>
            <div>
                <label>Mensagem</label>
                <textarea rows={4} placeholder="Escrava sua mensagem aqui..."/>
            </div>
            <Botao branco={false}>Enviar</Botao>
        </Form>
    )
}

export default Formulario;