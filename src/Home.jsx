import { useRef } from "react" // Importa o hook useRef do React para manipular elementos da DOM

function Home() {

  const inputRef = useRef() // Cria uma referência (inputRef) para acessar o elemento input

  function cliqueiNoBotao(){ // Função que será chamada ao clicar no botão
    console.log(inputRef.current.value)  // Exibe no console o valor digitado no input
  }

  return ( // Retorna o JSX (estrutura do componente)
    <div>
      <h1>Lista de Compras</h1>
      {<input placeholder="produto..." ref={inputRef}/>/*Input que recebe a referência, conecta a referência ao input. */}
      <button onClick={cliqueiNoBotao}>Adicionar</button>
    </div>
  )
}

export default Home // Exporta o componente para ser usado em outros arquivos
