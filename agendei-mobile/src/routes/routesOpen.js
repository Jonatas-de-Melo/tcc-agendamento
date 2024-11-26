import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/login/login.js";
import Conta from "../screens/novaconta/conta.js"


const Stack = createNativeStackNavigator();

function RoutesOpen(){
    return <Stack.Navigator>
        <Stack.Screen name="login"  component={Login} 
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen name="conta"  component={Conta}
         options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
}

export default RoutesOpen;