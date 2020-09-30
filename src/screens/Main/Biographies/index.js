import React from 'react'
import { View, Text } from 'react-native'
import AppList from '../../../components/AppList'

const Biographies = () => {
    return (
        <View>
            <AppList type='profiles' data={data} />
        </View>
    )
}

export default Biographies

const data = [
    {
        id: 1,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Profile',
        image: '../../../assets/mao.jpg'
    },
]