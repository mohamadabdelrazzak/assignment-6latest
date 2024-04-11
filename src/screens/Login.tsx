/* eslint-disable prettier/prettier */
import { View, Image, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { loginIntialValues, validationSchema } from './Utility';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';
const Login = () => {
    const handleLogin = (values: any)=>{
        console.log(values);
    }
    return (
        <View style={{ flex: 1 , alignItems: 'center', justifyContent: 'space-between' }}   >
            <View style={{ flex: 0.8, justifyContent: 'center'  }}>
            <Image source={require('../assets/marhba.jpg')} /> 
            <Formik
          initialValues={loginIntialValues}
          onSubmit={handleLogin}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => {
            return (
              <View>
                <InputBox
                  placeholder={'Username, email address or mobile number'}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.Username}
                  touched={touched.Username}
                  errors={errors.Username}
                />
                <InputBox
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.Password}
                  touched={touched.Password}
                  errors={errors.Password}
                  secureTextEntry
                />
                <CustomButton
                  buttonTitle={'Login'}
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            );
          }}
        </Formik>
            </View>
            <View style={{ flex: 0.2 , marginBottom: 20, justifyContent: 'flex-end' }}>
                <TouchableOpacity>
                <Text>
                    SignUp
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;

