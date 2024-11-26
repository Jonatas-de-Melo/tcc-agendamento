import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import icon from "../../constants/icon.js";
import { styles } from "./style.js";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import { AuthContext } from "../../contexts/auth.js";

//BUTAO EMAIL SENHA E ENTRAR IMPORTAÇÃO
import Button from "../../components/button/button.js";

function Login(props) {

    const {setUser } = useContext (AuthContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


   async function ExecuteLogin(){
        try{
            const response = await api.post("/users/login", {
                email,
                senha
            });

            if (response.data){
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
                setUser(response.data)
            }

        }catch (error){
            if(error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
            Alert.alert("Ocorreu um erro tente mais tarde");
        }
    }

    return(
     <View style={styles.body}>

        <View style={styles.logoCenter}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <View style={styles.inputBottom}>
                <TextInput placeholder="E-mail" style={styles.input}
                onChangeText={(texto) => setEmail(texto)}
                />
            </View>
            <View style={styles.inputBottom}>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(texto) => setSenha(texto)}
                    />
            </View>
            <Button text="Entrar" 
            onPress={ExecuteLogin}
            />
        </View>

        <View style={styles.footer}>
            
            <TouchableOpacity onPress={() => props.navigation.navigate("conta")}>
                <Text style={styles.footerLink}
                > Criar conta agora.
                </Text>
            </TouchableOpacity>
        </View>

    </View>
    );
};

export default Login;