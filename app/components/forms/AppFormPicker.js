import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

function AppFormPicker({ items, name, PickerItemComponent, placeholder, ...otherProps }) {
    const { setFieldValue, errors, touched, values} = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent = {PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;