import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    }
]
function ListingsScreen({ navigation }) {

    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <AppCard
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                        onPress={() => navigation.navigate("Listing Details", item)}
                    />
            }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;