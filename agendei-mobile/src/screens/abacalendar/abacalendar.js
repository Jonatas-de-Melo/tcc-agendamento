import { Alert, FlatList, View, Image } from "react-native";
import { styles } from "./style.js";
import Appo from "../../components/appo/appo.js";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";


function AbaCalendar() {

    const [appos, setAppos] = useState([]);

    async function LoadAppos(){
        try{
            const response = await api.get("/appos");
               
    
            if (response.data){
                setAppos(response.data);
            }
    
        }catch (error){
            
            if(error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
            Alert.alert("Ocorreu um erro tente mais tarde");
        }
    }

    async function DeleteAppos(id_appo){
        try{
            const response = await api.delete("/appos/ " + id_appo);
               
    
            if (response.data?.id_appo){
                LoadAppos();
            }
    
        }catch (error){
            
            if(error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
            Alert.alert("Ocorreu um erro tente mais tarde");
        }
    }

    useEffect(() =>{
        LoadAppos();
    }, []);

    return <View style={styles.container}>
        
        <FlatList data={appos}
            keyExtractor={(appo) => appo.id_appo}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appo id_appo= {item.id_appo}
                 servico={item.servico}
                profissional={item.profissional}

                //atenção
                bookingData={item.data}
                bookingHora={item.hora}
                funcao={item.funcao} 
                onPress={DeleteAppos}/>
            }} />
    </View>

    
}

export default AbaCalendar;