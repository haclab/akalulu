import React, { useState } from 'react'
import { StyleSheet, Alert, FlatList, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AnimatableManager, ThemeManager, Colors, BorderRadiuses, ListItem, Text } from 'react-native-ui-lib'; //eslint-disable-line

const AppList = ({ type, data }) => {
    const [onEdit, setOnEdit] = useState(false)
    const [updating, setUpdating] = useState(false)

    const keyExtractor = item => item.id;
    function renderRow(row, id) {

        const statusColor = type === 'audios' ? Colors.green30 : type === 'videos' ? Colors.red30 : type === 'profiles' ? Colors.blue30 : Colors.orange30;
        const animationProps = AnimatableManager.presets.fadeInRight;
        const imageAnimationProps = AnimatableManager.getRandomDelay();

        return (
            <Animatable.View {...animationProps}>
                <ListItem
                    activeBackgroundColor={Colors.dark60}
                    activeOpacity={0.3}
                    height={77.5}
                    onPress={() => Alert.alert(`pressed on order #${id + 1}`)}
                >
                    <ListItem.Part left>
                        <Animatable.Image
                            source={require('../assets/mao.jpg')}
                            style={styles.image}
                            {...imageAnimationProps}
                        />
                    </ListItem.Part>
                    <ListItem.Part middle column containerStyle={[styles.border, { paddingRight: 17 }]}>
                        <ListItem.Part containerStyle={{ marginBottom: 3 }}>
                            <Text dark10 text70 style={{ flex: 1, marginRight: 10 }} numberOfLines={1}>{row.name}</Text>
                            <Text dark10 text70 style={{ marginTop: 2 }}>{row.date}</Text>
                        </ListItem.Part>
                        <ListItem.Part>
                            <Text style={{ flex: 1, marginRight: 10 }} text90 dark40 numberOfLines={1}>{`${row.description}`}</Text>
                            <Text text90 color={statusColor} numberOfLines={1}>{row.tag}</Text>
                        </ListItem.Part>
                    </ListItem.Part>
                </ListItem>
            </Animatable.View>
        );
    }

    return (
        <FlatList
            data={data}
            renderItem={({ item, index }) => renderRow(item, index)}
            keyExtractor={keyExtractor}
        />
    )
}

export default AppList


const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 54,
        borderRadius: BorderRadiuses.br20,
        marginHorizontal: 14,
    },
    border: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: ThemeManager.dividerColor,
    },
});