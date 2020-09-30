import React from 'react'
import { View, Text } from 'react-native'
import AppList from '../../../components/AppList'

const Videos = () => {
    return (
        <View>
            <AppList type='videos' data={data} />
        </View>
    )
}

export default Videos

const data = [
    {
        id: 1,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Video',
        image: '../../../assets/mao.jpg'
    },
]