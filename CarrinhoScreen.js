import React,{useState} from "react";
import {View,Text,TextInput} from "react-native";
import styles from "../services/globalStyles";
import Botao from "../components/Botao";
import { ler } from "../services/storage";

export default function LoginScreen({navigation}){

const [usuario,setUsuario]=useState("");
const [senha,setSenha]=useState("");

async function entrar(){

if(usuario==="admin" && senha==="123"){
navigation.navigate("Admin");
return;
}

const usuarios = await ler("usuarios") || [];

const user = usuarios.find(
u => u.usuario === usuario && u.senha === senha
);

if(user){
navigation.navigate("Loja",{usuario});
}else{
alert("Usuário ou senha incorretos");
}

}

return(

<View style={styles.container}>

<Text style={styles.titulo}>Login</Text>

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

<Botao titulo="Entrar" onPress={entrar}/>

<Botao
titulo="Cadastrar"
onPress={()=>navigation.navigate("Cadastro")}
/>

</View>

);

}