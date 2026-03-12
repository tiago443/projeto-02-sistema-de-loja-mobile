import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import styles from "../services/globalStyles";
import Botao from "../components/Botao";
import { salvar, ler } from "../services/storage";

export default function AdminScreen({ navigation }) {

const [nome, setNome] = useState("");
const [descricao, setDescricao] = useState("");
const [preco, setPreco] = useState("");
const [produtos, setProdutos] = useState([]);

useEffect(() => {
carregarProdutos();
}, []);

async function carregarProdutos() {
const dados = await ler("produtos") || [];
setProdutos(dados);
}

async function criarProduto() {

const lista = await ler("produtos") || [];

const novoProduto = {
id: Date.now(),
nome,
descricao,
preco
};

lista.push(novoProduto);

await salvar("produtos", lista);

setNome("");
setDescricao("");
setPreco("");

alert("Produto criado!");

carregarProdutos();
}

return (

<View style={styles.container}>

<Text style={styles.titulo}>Área do Dono da Loja</Text>

<TextInput
placeholder="Nome do produto"
style={styles.input}
value={nome}
onChangeText={setNome}
/>

<TextInput
placeholder="Descrição"
style={styles.input}
value={descricao}
onChangeText={setDescricao}
/>

<TextInput
placeholder="Preço"
style={styles.input}
value={preco}
onChangeText={setPreco}
/>

<Botao
titulo="Criar Produto"
onPress={criarProduto}
/>

<Text style={{marginTop:20,fontWeight:"bold"}}>
Produtos cadastrados:
</Text>

<FlatList
data={produtos}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(
<View style={{padding:10,borderBottomWidth:1}}>
<Text>{item.nome}</Text>
<Text>{item.descricao}</Text>
<Text>R$ {item.preco}</Text>
</View>
)}
/>

</View>

);
}