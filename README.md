# Projeto 02 – Sistema de Loja Mobile

Aplicativo desenvolvido em React Native utilizando Expo Snack.  
O projeto simula uma loja virtual simples com usuários, produtos e carrinho de compras.

## Funcionalidades

- Login de usuários
- Cadastro de clientes
- Área do administrador para criação de produtos
- Visualização de produtos
- Carrinho de compras
- Armazenamento de dados com AsyncStorage

## Como funciona o Login

O login verifica se o usuário e senha correspondem a um administrador ou a um cliente cadastrado.

Administrador:
usuario: admin  
senha: 123

Se for administrador, o sistema direciona para a área de gerenciamento da loja.  
Se for cliente, o sistema abre a lista de produtos.

## Como os produtos são salvos

Os produtos são cadastrados pelo administrador e salvos utilizando AsyncStorage.

Cada produto possui:
- id
- nome
- descrição
- preço

Exemplo de código:

```javascript
const produtos = await ler("produtos") || [];

produtos.push({
id: Date.now(),
nome,
descricao,
preco
});

await salvar("produtos", produtos);
