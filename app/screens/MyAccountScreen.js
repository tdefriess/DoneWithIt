import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';
import { useNavigation } from '@react-navigation/native'

import { ListItem, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    { 
        title: "My Listings",
        navigation: null,
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    { 
        title: "My Messages",
        navigation: "Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
    ]

function MyAccountScreen(props) {
    const navigation = useNavigation();

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Tyler de Friess"
                    subTitle="tyler.defriess@gmail.com"
                    image={require('../assets/tyler.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            onPress={() => navigation.navigate(item.navigation)}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            }
                        />
                }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default MyAccountScreen;