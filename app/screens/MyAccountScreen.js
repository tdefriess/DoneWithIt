import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';

import { ListItem, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';

const menuItems = [
    { 
        title: "My Listings",
        targetScreen: null,
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    { 
        title: "My Messages",
        targetScreen: routes.MESSAGES,
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
    ]

function MyAccountScreen({ navigation }) {

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
                            onPress={() => navigation.navigate(item.targetScreen)}
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