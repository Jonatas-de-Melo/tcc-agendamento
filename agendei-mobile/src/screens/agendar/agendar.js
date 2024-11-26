import { Alert, Text, View } from "react-native";
import { styles } from "./style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.js";
import api from "../../constants/api.js";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Agendar(props) {

    const id_profissional = props.route.params.id_profissional;
    const id_servico = props.route.params.id_servico;

    const [selectedData, setSelectedData] = useState("");
    const [selectedHora, setSelectedHora] = useState("");
    const [availableHours, setAvailableHours] = useState([
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", 
        "11:00", "13:00", "13:30", "14:00", "14:30", "15:00", 
        "15:30", "16:00", "16:30"
    ]);

    // Função para verificar se a data selecionada é um domingo
    function isSunday(dateString) {
        const day = new Date(dateString).getDay();
        return day === 6; // 0 significa domingo
    }

    // Atualizar horas disponíveis com base na data selecionada
    useEffect(() => {
        if (selectedData) {
            const currentDate = new Date();
            const selectedDate = new Date(selectedData);

            // Se for hoje, filtra os horários passados
            if (selectedDate.toDateString() === currentDate.toDateString()) {
                const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes() < 30 ? "00" : "30"}`;
                setAvailableHours(availableHours.filter(time => time > currentTime));
            } else {
                setAvailableHours([
                    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", 
                    "11:00", "13:00", "13:30", "14:00", "14:30", "15:00", 
                    "15:30", "16:00", "16:30"
                ]);
            }
        }
    }, [selectedData]);

    async function ClickBooking() {
        try {
            const response = await api.post("/appos", {
                id_profissional: id_profissional,
                id_servico: id_servico,
                data: selectedData,
                hora: selectedHora
            });

            if (response.data?.id_appo) {
                props.navigation.popToTop();
            }

        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro tente mais tarde");
        }
    }

    return <View style={styles.container}>
        <View>
            <Calendar
                theme={styles.tema}
                onDayPress={(dia) => {
                    if (!isSunday(dia.dateString)) {
                        setSelectedData(dia.dateString);
                    } else {
                        Alert.alert("Domingo não está disponível para agendamento.");
                    }
                }}
                markedDates={{
                    [selectedData]: { selected: true },
                }}
                minDate={new Date().toISOString().split("T")[0]}
                disabledDaysIndexes={[6]} // Bloquear domingos
            />

            <View>
                <Text style={styles.textHora}>Horário</Text>
            </View>

            <View>
                <Picker selectedValue={selectedHora}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedHora(itemValue);
                    }}>
                    {availableHours.map((hora, index) => (
                        <Picker.Item key={index} label={hora} value={hora} />
                    ))}
                </Picker>
            </View>

        </View>

        <View>
            <Button text="Confirmar Reserva" onPress={ClickBooking} />
        </View>

    </View>
}

export default Agendar;
