import { useRef, useState } from "react" // Importa o hook useRef do React para manipular elementos da DOM
import {v4} from 'uuid'
import { AddButton, Container, input, Product, TrashButton} from './styles' //Componentes styled do arquivo styles.jsx

function Home() {
  const [produtos, setProdutos] = useState([]) //produto (variavel que armazena), setProdutos (função que atualiza o estado),useState([]) valor inicial zero 
  const inputRef = useRef() // Cria uma referência (inputRef) para acessar o elemento input
 
  function cliqueiNoBotao(){ // Função que será chamada ao clicar no botão
    //setProdutos([inputRef.current.value, ...produtos])  // Exibe no console o valor digitado no input 
    //O ...produtos significa: "pegue todos os itens do array produtos e coloque-os neste novo array dentro da função setProdutos".
    setProdutos([{id: v4(), nome: inputRef.current.value}, ...produtos])
    inputRef.current.value = ' '; //Limpa o input ao clicar em adicionar
  }

  function deletarProduto(id){
    setProdutos(produtos.filter(produto => produto.id !== id))//Aqui esta fazendo um filtro, pegando todos os produto dentro de produtos, deixando apenas o produto com id diferente do id que foi clicado
    //produto (o primeiro) é o parâmetro da função de callback do filter. Representa cada item do array (produtos) enquanto o filter itera sobre ele.
    //produto.id (o segundo) é a propriedade id do objeto atual (produto) sendo verificado.produto.id (o segundo) é a propriedade id do objeto atual (produto) sendo verificado.
    //id é a variável externa (passada como argumento ou definida no escopo da function)
  }

  return ( // Retorna o JSX (estrutura do componente)
    <Container>
      <h1 className="roboto">Lista de Compras</h1>
      {<input placeholder="produto..." ref={inputRef}/>/*Input que recebe a referência, conecta a referência ao input. */}
      {<AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton> /*Componentes styled  */}

      {produtos.map((produto) =>( //Pegue o array produtos (sua lista de compras), para cada produto nessa lista:  
        <Product key={produto.id}>
          <p>{produto.nome}</p>
          <TrashButton onClick={()=>deletarProduto(produto.id)}>🗑️</TrashButton>
        </Product> //transforme em uma <div> com o nome do produto dentro
      ))}
    </Container>
  )
}

export default Home // Exporta o componente para ser usado em outros arquivos
