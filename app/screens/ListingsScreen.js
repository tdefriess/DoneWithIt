import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
function ListingsScreen(props) {
    const navigation = useNavigation();

    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Listing Details')}>
                        <AppCard
                            title={item.title}
                            subTitle={"$" + item.price}
                            image={item.image}
                        />
                    </TouchableWithoutFeedback>
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