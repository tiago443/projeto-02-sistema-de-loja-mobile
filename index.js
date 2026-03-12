import React,{useEffect,useState} from "react";
import {View,Text,FlatList,Button} from "react-native";
import styles from "../services/globalStyles";
import ProdutoCard from "../components/ProdutoCard";
import { ler, salvar } from "../services/storage";

export default function LojaScreen({route,navigation}){

const {usuario} = route.params;

const [produtos,setProdutos]=useState([]);

useEffect(()=>{
carregar();
},[]);

async function carregar(){

const dados = await ler("produtos") || [];

setProdutos(dados);

}

async function adicionar(produto){

const carrinho = await ler("carrinho_"+usuario) || [];

carrinho.push(produto);

await salvar("carrinho_"+usuario,carrinho);

alert("Produto adicionado ao carrinho");

}

return(

<View style={styles.container}>

<Text style={styles.titulo}>Lista de Produtos</Text>

<Button
title="Ver Carrinho"
onPress={()=>navigation.navigate("Carrinho",{usuario})}
/>

<FlatList
data={produtos}
keyExtractor={(item)=>item.id.toString()}
renderItem={({item})=>(
<ProdutoCard produto={item} adicionar={adicionar}/>
)}
/>

</View>

);

}