import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ProdutoArgs {
    id: string;
}

interface AdicionarProdutoArgs {
    nome: string;
    descricao: string;
    preco: number;
    categoria: string;
}


export const resolvers = {
    Query: {
        produtos: async () => {
            return await prisma.produto.findMany();
        },
        produto: async (_: any, { id }: ProdutoArgs) => {
            return await prisma.produto.findUnique({
                where: { id: parseInt(id) },
            });
        },
    },
    Mutation: {
        adicionarProduto: async (_: any, { nome, descricao, preco, categoria }: AdicionarProdutoArgs) => {
            return await prisma.produto.create({
                data: {
                    nome,
                    descricao,
                    preco,
                    categoria,
                },
            });
        },
        deletarProduto: async (_: any, { id }: ProdutoArgs) => {
            return await prisma.produto.delete({
                where: { id: parseInt(id) },
            });
        },
        atualizarProduto: async (_: any, { id, nome, descricao, preco, categoria }: AdicionarProdutoArgs & ProdutoArgs) => {
            return await prisma.produto.update({
                where: { id: parseInt(id) },
                data: {
                    nome,
                    descricao,
                    preco,
                    categoria,
                },
            });
        },
    },
};