import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./style.js";

function Button(props) {

    return <TouchableOpacity

        style={[styles.btn,
        props.theme == "atencao" ?
            styles.atencao : styles.primaria]}

        onPress={props.onPress} >
        <Text style={styles.text}>
            {props.text}
        </Text>
    </TouchableOpacity>

}

export default Button;