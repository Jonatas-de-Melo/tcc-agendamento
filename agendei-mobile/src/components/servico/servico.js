import { Text, View } from "react-native";
import { styles } from "./style.js";
import Button from "../button/button.js";

function Servico(props) {
    return <View style={styles.servico}>
        <View style={styles.containerText}>
            <Text style={styles.descricao}>{props.descricao}</Text>
            <Text style={styles.preco}>
                {
                    new Intl.NumberFormat("pt-BR", {
                        style: "currency", currency: "BRL"
                    }).format(props.preco)
                }

            </Text>
        </View>

        <View style={styles.containerButton}>
            <Button  text="Agendar" onPress={()=> props.onPress(props.id_servico)} />
        </View>
    </View>
}

export default Servico;