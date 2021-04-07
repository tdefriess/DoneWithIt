import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

function AppFormPicker({ name, ...otherProps }) {
    const {setFieldTouched, setFieldValue, errors, touched} = useFormikContext();

    return (
        <>
            <AppPicker 
                onBlur={() => setFieldTouched(name)}
                onSelectItem={setFieldValue}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;