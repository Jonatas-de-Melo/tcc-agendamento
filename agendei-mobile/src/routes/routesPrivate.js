import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Main from "../screens/main/main.js";
import Servicos from "../screens/servico/servico.js";
import Agendar from "../screens/agendar/agendar.js";

const Stack = createNativeStackNavigator();

function RoutesPrivate(){
    return <Stack.Navigator>
        <Stack.Screen name="main"  component={Main}
         options={{
            headerShown: false
        }} />

        <Stack.Screen name="servico"  component={Servicos}
         options={{
            headerTitle: "Serviços",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTintColor:  "#ffffff",
            headerStyle:{
                backgroundColor: "#0D6EFD",
            }        
        }} />

        <Stack.Screen name="agendar"  component={Agendar}
        options={{
            headerTitle: "Agendar",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTintColor:   "#0D6EFD"
            
        }} />
       
       
    </Stack.Navigator>
}

export default RoutesPrivate;