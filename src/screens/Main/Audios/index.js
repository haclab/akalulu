import React from 'react'
import AppList from '../../../components/AppList';

const Audios = () => {

    return (
        <AppList type='audios' data={dataList} />
    )
}

export default Audios


const dataList = [
    {
        id: 1,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    },
    {
        id: 2,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 3,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 4,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 5,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 6,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 7,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 9,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 10,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }, {
        id: 11,
        name: 'NOBERT MAO',
        description: 'You’re a graduate, now what?',
        date: new Date().toLocaleString('DD/MM/YYYY'),
        tag: 'Audio',
        image: '../../../assets/mao.jpg'
    }
];