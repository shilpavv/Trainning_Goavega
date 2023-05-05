
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native'
import { Button } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const Formiks = () => {
  return (
    <View>
           <View style={styles.loginContainer}>
          <Text>Login Screen</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values:any) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values , errors,touched, isValid}:any) => (
              <>
                <TextInput
                  // name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
               
               {(errors.email && touched.email) &&
                  <Text style={styles.errorText}>{errors.email}</Text>
                }
                <TextInput
                  // name="password"
                  placeholder="Password"
                  style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                 {(errors.password && touched.password) &&
                       <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
                <Button onPress={handleSubmit} title="Submit" />
              </>
            )}
          </Formik>
        </View>
         </View>
  )
}


const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
})

    export default Formiks