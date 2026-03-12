import React,{useState} from "react";
import {View,Text,TextInput} from "react-native";
import styles from "../services/globalStyles";
import Botao from "../components/Botao";
import { salvar, ler } from "../services/storage";

export default function CadastroScreen({navigation}){

const [usuario,setUsuario]=useState("");
const [senha,setSenha]=useState("");

async function cadastrar(){

const usuarios = await ler("usuarios") || [];

usuarios.push({usuario,senha});

await salvar("usuarios",usuarios);

alert("Usuário cadastrado!");

navigation.goBack();

}

return(

<View style={styles.container}>

<Text style={styles.titulo}>Cadastro</Text>

<TextInput
placeholder="Usuário"
style={styles.input}
onChangeText={setUsuario}
/>

<TextInput
placeholder="Senha"
secureTextEntry
style={styles.input}
onChangeText={setSenha}
/>

<Botao titulo="Cadastrar" onPress={cadastrar}/>

</View>

);

}