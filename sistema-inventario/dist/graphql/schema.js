"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
