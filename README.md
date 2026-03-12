import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import CadastroScreen from "./screens/CadastroScreen";
import AdminScreen from "./screens/AdminScreen";
import LojaScreen from "./screens/LojaScreen";
import CarrinhoScreen from "./screens/CarrinhoScreen";

const Stack = createNativeStackNavigator();

export default function App(){

return(

<NavigationContainer>

<Stack.Navigator>

<Stack.Screen name="Login" component={LoginScreen}/>
<Stack.Screen name="Cadastro" component={CadastroScreen}/>
<Stack.Screen name="Admin" component={AdminScreen}/>
<Stack.Screen name="Loja" component={LojaScreen}/>
<Stack.Screen name="Carrinho" component={CarrinhoScreen}/>

</Stack.Navigator>

</NavigationContainer>

);

}