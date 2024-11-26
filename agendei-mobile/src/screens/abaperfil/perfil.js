import {Alert, Text, View } from "react-native";
import { styles } from "./style.js";
import api from "../../constants/api.js";
import { useContext, useEffect, useState } from "react";
import  Button  from "../../components/button/button.js";
import {AuthContext} from "../../contexts/auth.js";

function AbaPerfil() {

    const {setUser} = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [email, setEmai] = useState("");

    async function LoadProfile(){
        try{
            const response = await api.get("/users/profile");
               
    
            if (response.data?.nome){
               setNome(response.data.nome);
               setEmai(response.data.email);
            }
    
        }catch (error){
            
            if(error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
            Alert.alert("Ocorreu um erro tente mais tarde");
        }
    }

     function Logout(){
        api.defaults.headers.common['Authorization'] = "" ;
        setUser({});
     }

    useEffect(()=>{
        
        LoadProfile()
    });

    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.text}>{nome}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.title}>E-mail</Text>
            <Text style={styles.text}>{email}</Text>
        </View>

        <View style={styles.item}>
            <Button text="Desconectar" theme="danger"
            onPress={Logout} />
        </View>
    </View>
}

export default AbaPerfil;