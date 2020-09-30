import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Audios from './Audios';
import Videos from './Videos';
import Manifesto from './Manifesto';
import Biographies from './Biographies';
import News from './News';

const Drawer = createDrawerNavigator()
const Main = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Audios" component={Audios} />
            <Drawer.Screen name="Videos" component={Videos} />
            <Drawer.Screen name="manifesto" component={Manifesto} />
            <Drawer.Screen name="Biographies" component={Biographies} />
            <Drawer.Screen name="News" component={News} />
            {/* <Drawer.Screen name="Audios" component={Audios} />
           <Drawer.Screen name="Audios" component={Audios} /> */}
        </Drawer.Navigator>
    )
}

export default Main
