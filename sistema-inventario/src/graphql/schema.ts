import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Produto {
        id: ID!
        nome: String!
        descricao: String!
        preco: Float!
        categoria: String!
    }

    type Query{
        produtos: [Produto!]!
        produto(id: ID!) Produto
    }

    type Mutation{
        adicionarProduto(nome: String!, descricao: String!, preco: Float!, categoria: String!): Produto!
        deletarProduto(id: ID!) Produto!
        atualizarProduto(id: ID!, nome: String, descricao: String, preco: Float, categoria: String): Produto!
    }
`;