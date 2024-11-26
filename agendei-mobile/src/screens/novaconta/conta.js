import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./style.js";
import Button from "../../components/button/button.js";
import api from "../../constants/api.js"

function Account(props) {


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
   async function ExecuteAccount(){
    try{
        const response = await api.post("/users/register", {
            nome,
            email,
            senha
        });

        if (response.data){
            console.log(response.data)
            props.navigation.navigate("login");
            
        }

    }catch (error){
        if(error.response?.data.error)
            Alert.alert(error.response.data.error);
        else
        Alert.alert("Ocorreu um erro tente mais tarde");
    }
}

    return <View style={styles.body}>

        <View style={styles.logoCenter}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <View style={styles.inputBottom}>
                <TextInput placeholder="Nome" style={styles.input}
                onChangeText={(texto) => setNome(texto)} />
            </View>
            <View style={styles.inputBottom}>
                <TextInput placeholder="E-mail" style={styles.input}
                onChangeText={(texto) => setEmail(texto)} />
            </View>
            <View style={styles.inputBottom}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(texto) => setSenha(texto)}  />
            </View>
            <Button text="Criar Conta"
            onPress={ExecuteAccount} />
        </View>

        <View style={styles.footer}>
           
            <TouchableOpacity onPress={() => props.navigation.goBack()}  >
                <Text style={styles.footerLink} >
                Já tenho conta Fazer login.
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default Account;