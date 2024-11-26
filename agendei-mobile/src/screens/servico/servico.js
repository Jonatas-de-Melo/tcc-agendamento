import {Alert, FlatList, Text, View, Image } from "react-native";
import { styles } from "./style.js";
import icon from "../../constants/icon.js";
import Servico from "../../components/servico/servico.js";
import api from "../../constants/api.js";
import { useEffect, useState } from "react";


function Servicos(props) {

    const id_profissional= props.route.params.id_profissional;
    const nome= props.route.params.nome;
    const funcao= props.route.params.funcao;
    const iconProfissional= props.route.params.icon;

    const [servicos, setServicos] = useState([]);

    function ClickService(id_servico){
            props.navigation.navigate("agendar", {
                id_profissional,
                id_servico
            });
    }
    
       async function LoginServicos(){
            try{
                const response = await api.get("/profissionais/" + id_profissional + "/servicos");
                   
    
                if (response.data){
                    setServicos(response.data)
                }
    
            }catch (error){
                if(error.response?.data.error)
                    Alert.alert(error.response.data.error);
                else
                Alert.alert("Ocorreu um erro tente mais tarde");
            }
        }

        useEffect(() =>{
            LoginServicos();
        }, []);


    return <View style={styles.container}>

        <View style={styles.banner}>
           <Image style={ { width: 150, height: 200, top: 5 }}   source={icon.logo }  />
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.especialidade}>{funcao}</Text>
        </View>


        <FlatList data={servicos}
            keyExtractor={(serv) => serv.id_servico}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Servico id_servico={item.id_servico}
                 descricao={item.descricao}
                    preco={item.preco}
                    onPress={ClickService}
                    />
            }} />
    </View>
}



export default Servicos;