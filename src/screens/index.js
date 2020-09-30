import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import Splash from './Splash'
import { createStackNavigator } from '@react-navigation/stack'
import Main from './Main'

const Stack = createStackNavigator()
const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen options={{ header: () => null }} name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Screens
