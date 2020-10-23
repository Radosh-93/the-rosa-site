import React from 'react'
import {Formik, Form, useField} from "formik";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a6e22e'
        },
        type: "dark",
        text: {
            primary: '#e6db74',
        },
        error: {
            main: '#CF06A4',

        },
        background: {
            default: '#ffffff',
            paper: '#ffffff'
        }
    },


});
const validate = values => {
    const errors = {};
    if (!(/^(\w+([.-])?)+\w+@(\w+\.)+[a-z]{2,4}/i.test(values.email))
        && values.email.length > 0) {
        errors.email = 'Not valid email';
    }
    return errors;
}
const initialValues = {email: ''}
const submitForm = (values, {setSubmitting, resetForm}) => {
    setSubmitting(true);
    setTimeout(() => {
        alert('Submit: ' + values.email);
        setSubmitting(false);
        resetForm();
    }, 1000)
}

const MyTextField = ({label, variant, ...props}) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <ThemeProvider theme={theme}>
            <TextField {...field}
                       label={label}
                       autoComplete='off'
                       helperText={errorText}
                       error={!!errorText}
                       variant={variant} />
        </ThemeProvider>
    )
}

const Newsletter = ({className, variant}) => {
    return (
        <Formik initialValues={initialValues} validate={validate}
                onSubmit={submitForm}>
            {({isSubmitting,}) => (
                <Form className={className}>
                    <MyTextField name='email'
                                 type='input'
                                 label='Email'
                                 variant={variant}/>
                    <IconButton color="primary"
                                type='submit'
                                disabled={isSubmitting}
                    ><EmailIcon/></IconButton>
                </Form>
            )}
        </Formik>
    );
};
export default Newsletter;