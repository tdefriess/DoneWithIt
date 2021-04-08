import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().min(1).max(10000).required().label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
})

const categories = [
    { label: "Furniture", value: 1, icon: "floor-lamp", iconColor: '#fc5c65' },
    { label: "Cars", value: 2, icon: "car", iconColor: '#fd9644' },
    { label: "Cameras", value: 3, icon: "camera", iconColor: '#fed330' },
    { label: "Games", value: 4, icon: "cards", iconColor: '#26de81' },
    { label: "Clothing", value: 5, icon: "shoe-heel", iconColor: '#2bcbba' },
    { label: "Sports", value: 6, icon: "basketball", iconColor: '#45aaf2' },
    { label: "Movies & Music", value: 7, icon: "headphones", iconColor: '#4b7bec' },
]

function ListingEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCorrect={false} 
                    name="title"
                    placeholder="Title"
                />
                <AppFormField 
                    name="price"
                    keyboardType="numeric"
                    maxLength={8}
                    placeholder="Price"
                    width="30%"
                />
                <AppFormPicker 
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    maxLength={255}
                    multiline 
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default ListingEditScreen;