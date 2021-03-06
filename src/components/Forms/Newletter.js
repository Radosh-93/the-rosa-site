import React from 'react'
import {Formik, Form, useField} from "formik";
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Enter your email, please'
    }
    if (!(/^(\w+([.-])?)+\w+@(\w+\.)+[a-z]{2,4}/i.test(values.email))
        && values.email.length > 0) {
        errors.email = 'Not valid email';
    }
    return errors;
};

const initialValues = {email: ''};

const MyTextField = ({label, variant, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <div className='input-container'>
            <input type="email"
                   className={`newsletter-input ${errorText ? 'error' : ''}`}
                   placeholder='Your email address...'
                   {...field}/>
            {errorText ? <p className='error-message'>{meta.error}</p> : null}
        </div>
    )
}

const Newsletter = ({className, variant, setIsPopUp}) => {

    const submitForm = (values, {setSubmitting, resetForm}) => {
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setIsPopUp(true);
            resetForm();
        }, 1000)
    }

    return (
        <Formik initialValues={initialValues} validate={validate}
                onSubmit={submitForm}>
            {({isSubmitting}) => (
                <Form className={className} >
                    <MyTextField name='email'
                                 type='input'
                                 label='Email'
                                 variant={variant}/>
                    <IconButton className='newsletter-btn' type='submit'
                                disabled={isSubmitting}
                    ><EmailIcon/></IconButton>
                </Form>
            )}
        </Formik>
    );
};
export default Newsletter;