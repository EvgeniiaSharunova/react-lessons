import React from 'react';
import { Field } from 'redux-form';
import style from './FormsControls.module.css';

export const FormControl = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={hasError ? style.formControl + ' ' + style.error : style.formControl}>
            <div>
                <props.typeField {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, component, typeField, validate, text = '', props = {}) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} typeField={typeField} validate={validate} {...props} />{text}
        </div>
    )
}

/* export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
} */