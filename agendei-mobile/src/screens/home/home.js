import {Alert, FlatList, Text, View,Image } from "react-native";
import { styles } from "./style.js";
import Profissional from "../../components/profissional/proficional.js";
import icon from "../../constants/icon.js";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";


function Home(props) {

    const [profissionais, setProfissionais] = useState([]);

    function ClickProfissional(id_profissional, nome, funcao, icon){
        props.navigation.navigate("servico", {
            id_profissional,
            nome,
            funcao,
            icon
        });
    }

    async function LoadProfissionais(){
        try{
            const response = await api.get("/profissionais");
               

            if (response.data){
                setProfissionais(response.data)
            }

        }catch (error){
            if(error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
            Alert.alert("Ocorreu um erro tente mais tarde");
        }
    }

    useEffect(() => {
        LoadProfissionais();
    }, []);


    return <View style={styles.container}>

        <View style={styles.logoCenter}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <Text style={styles.text}>Agende os seus serviços </Text>

        <FlatList data={profissionais}
            keyExtractor={(doc) => doc.id_profissional }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Profissional id_profissional={item.id_profissional}
                 nome={item.nome}
                    icon={item.icon} 
                    funcao={item.funcao} 
                    onPress={ClickProfissional}
                    />
            }} />
    </View>
}

export default Home;