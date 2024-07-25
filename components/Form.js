import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: yup
    .string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const LoginForm = () => (
    <Formik validationSchema={loginValidationSchema} initialValues={{ email: '', password: '' }} onSubmit={values => c.l(values)}>
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, }) => (
    <>
    <TextInput name="email" placeholder="Email Address" style={styles.textInput} onChangeText={handleChange('email')}
    onBlur={handleBlur('email')} value={values.email} keyboardType="email-address" />
    {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text> }
    <TextInput name="password" placeholder="Password" style={styles.textInput} onChangeText={handleChange('password')}
    onBlur={handleBlur('password')} value={values.password} secureTextEntry />
    {errors.password && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text> }
    <Button onPress={handleSubmit} title="LOGIN" disabled={!isValid} />
    </> )}
    </Formik>
);

const SignUpForm = () => (
  <Formik
    validationSchema={signUpValidationSchema}
    initialValues={{ fullName: '', phoneNumber: '', email: '', password: '', confirmPassword: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
      <>
        <TextInput
          name="fullName"
          placeholder="Full Name"
          style={styles.textInput}
          onChangeText={handleChange('fullName')}
          onBlur={handleBlur('fullName')}
          value={values.fullName}
        />
        {errors.fullName && <Text style={{ fontSize: 10, color: 'red' }}>{errors.fullName}</Text>}
        <TextInput
          name="phoneNumber"
          placeholder="Phone Number"
          style={styles.textInput}
          onChangeText={handleChange('phoneNumber')}
          onBlur={handleBlur('phoneNumber')}
          value={values.phoneNumber}
          keyboardType="phone-pad"
        />
        {errors.phoneNumber && <Text style={{ fontSize: 10, color: 'red' }}>{errors.phoneNumber}</Text>}
        <TextInput
          name="email"
          placeholder="Email Address"
          style={styles.textInput}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
        />
        {errors.email && <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>}
        <TextInput
          name="password"
          placeholder="Password"
          style={styles.textInput}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry
        />
        {errors.password && <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>}
        <TextInput
          name="confirmPassword"
          placeholder="Confirm Password"
          style={styles.textInput}
          onChangeText={handleChange('confirmPassword')}
          onBlur={handleBlur('confirmPassword')}
          value={values.confirmPassword}
          secureTextEntry
        />
        {errors.confirmPassword && <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirmPassword}</Text>}
        <Button onPress={handleSubmit} title="SIGN UP" disabled={!isValid} />
      </>
    )}
  </Formik>
);

const Form = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <LoginForm />
      <Text style={styles.title}>Sign Up</Text>
      <SignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Form;
