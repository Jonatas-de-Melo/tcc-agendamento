import { Image, Text, View } from "react-native";
import { styles } from "./style.js";
import icon from "../../constants/icon.js";
import Button from "../button/button.js";

function Appo(props) {

    const dt = new Date(props.bookingData + "T" + props.bookingHora);

    return <View style={styles.appo}>
        <Text style={styles.nome}>
            {props.servico} - {props.profissional}
        </Text>
        <Text style={styles.funcao}>{props.funcao}</Text>

        <View style={styles.container}>

            <View style={styles.containerReserva}>

                <View style={styles.reserva}>
                    <Image style={styles.icon}
                        source={icon.calendar} />
                    <Text style={styles.reservaData}>
                        {dt.toLocaleDateString()}
                    </Text>
                </View>

                <View style={styles.reserva}>
                    <Image style={styles.icon}
                        source={icon.clock} />
                    <Text style={styles.reservaHora}>
                        {props.bookingHora}hs
                    </Text>
                </View>

            </View>

            <View style={styles.containerButton}>
                <Button  text="Cancelar Reserva" theme="atencao"
                onPress={() => props.onPress(props.id_appo)} />
            </View>

        </View>
    </View>
}

export default Appo;