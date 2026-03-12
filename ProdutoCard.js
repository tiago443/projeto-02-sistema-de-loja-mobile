import React,{useEffect,useState} from "react";
import {View,Text,FlatList} from "react-native";
import styles from "../services/globalStyles";
import { ler } from "../services/storage";

export default function CarrinhoScreen({route}){

const {usuario}=route.params;

const [carrinho,setCarrinho]=useState([]);

useEffect(()=>{
carregar();
},[]);

async function carregar(){

const dados = await ler("carrinho_"+usuario) || [];
setCarrinho(dados);

}

return(

<View style={styles.container}>

<Text style={styles.titulo}>Carrinho</Text>

<FlatList
data={carrinho}
keyExtractor={(item,index)=>index.toString()}
renderItem={({item})=>(
<Text>{item.nome} - R$ {item.preco}</Text>
)}
/>

</View>

);

}