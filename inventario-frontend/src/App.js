import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_PRODUTOS = gql`
  query GetProdutos {
    produtos {
      id
      nome
      descricao
      preco
      categoria
    }
  }
`;

function App() {
  const { loading, error, data} = useQuery(GET_PRODUTOS);

  if(loading) return <p>Carregando...</p>
  if(error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {data.produtos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Preço: {produto.preco}</p>
            <p>Categoria: {produto.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;