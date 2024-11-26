import { Image } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from "../../constants/icon.js";

import Home from "../home/home.js";
import AbaCalendar from "../abacalendar/abacalendar.js";
import AbaPerfil from "../abaperfil/perfil.js";

const Tab = createBottomTabNavigator();

function Main() {
    return <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Home} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                   return <Image source={icon.fundo} style={
                        { width: 1000, height: 200 }
                    } />
                },
               
                tabBarIcon: ({ focused }) => {
                    return <Image source={icon.home} style={
                        {
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }} />

            <Tab.Screen name="Agenda" component={AbaCalendar} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.fundo} style={
                        {
                            width: 1000, height: 200, top: 50
                        }
                    } />
                },
              //  tabBarShowLabel: false,
                unmountOnBlur:true,
                tabBarIcon: ({ focused }) => {
                    return <Image source={icon.calendar} style={
                        {
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }} />

            <Tab.Screen name="Perfil" component={AbaPerfil} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.fundo} style={
                        { width: 1000, height: 200,  }
                    } />
                },
              //  tabBarShowLabel: false,
                unmountOnBlur:true,
                tabBarIcon: ({ focused }) => {
                    return <Image source={icon.profile} style={
                        {
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }} />
        </Tab.Navigator>
    
}

export default Main;