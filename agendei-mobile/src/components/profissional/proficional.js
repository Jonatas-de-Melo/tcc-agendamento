import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./style.js";
import icon from "../../constants/icon.js";

// Define o componente 'profissionais', que exibe informações de um profissional
function Profissionais(props) {
    return <TouchableOpacity style={styles.bg}
         onPress={() => props.onPress(props.id_profissional, props.nome, props.funcao, icon.male)} >
           
            <Image source={icon.male} style={styles.icon} />
           
            <View>
                
                <Text style={styles.nome}>{props.nome}</Text>
               
                <Text style={styles.funcao}>{props.funcao}</Text>
            </View>
        </TouchableOpacity>
    
}

export default Profissionais;


