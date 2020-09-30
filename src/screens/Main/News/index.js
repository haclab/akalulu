import React from 'react'
import { View, Text } from 'react-native'
import AppList from '../../../components/AppList'

const News = () => {
    return (
        <View>
            <AppList type="news" data={data} />
        </View>
    )
}

export default News

const data = [
    {
        id: 1,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'News',
        image: '../../../assets/mao.jpg'
    },
]