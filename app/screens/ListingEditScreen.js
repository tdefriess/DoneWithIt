import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import useApi from '../hooks/useApi';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().min(1).max(10000).required().label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, 'Please select at least one image.')
})

const categories = [
    { label: "Furniture", value: 1, icon: "floor-lamp", backgroundColor: '#fc5c65' },
    { label: "Cars", value: 2, icon: "car", backgroundColor: '#fd9644' },
    { label: "Cameras", value: 3, icon: "camera", backgroundColor: '#fed330' },
    { label: "Games", value: 4, icon: "cards", backgroundColor: '#26de81' },
    { label: "Clothing", value: 5, icon: "shoe-heel", backgroundColor: '#2bcbba' },
    { label: "Sports", value: 6, icon: "basketball", backgroundColor: '#45aaf2' },
    { label: "Movies & Music", value: 7, icon: "headphones", backgroundColor: '#4b7bec' },
    { label: "Books", value: 8, icon: "book-open-variant", backgroundColor: '#a55eea' },
    { label: "Other", value: 9, icon: "application", backgroundColor: '#778ca3' },
]

function ListingEditScreen(props) {
    // const { error, loading, request: postListings } = useApi(listingsApi.postListings)
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const location = useLocation();

    const handleSubmit = async (listing) => {
        setUploadVisible(true);
        const result = await listingsApi.postListing(
            {...listing, location},
            (progress) => setProgress(progress)
        );
        setUploadVisible(false);

        if (!result.ok) return alert('Could not save the listing.');
        alert('Success');
    }

    return (
        <Screen style={styles.container}>
            <UploadScreen progress={progress} visible={uploadVisible} />
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null, images: []}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
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
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
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