import React from 'react'
import { View, Text } from 'react-native'
import AppList from '../../../components/AppList'

const Manifesto = () => {
    return (
        <View>
            <AppList type='manifestos' data={data} />
        </View>
    )
}

export default Manifesto

const data = [
    {
        id: 1,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Manifesto',
        image: '../../../assets/mao.jpg'
    },
]