import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';
import { SignupValidationSchema ,signUpIntialValues } from './Utility';
const Signup = () => {
  const handleSignup = (values: any) => {
    console.log(values);
  };
  return (
    <View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          marginTop: 20,
          backgroundColor: 'white',
        }}>
        <View style={{flex: 0.3}}>
          <Text style={{fontSize: 25, fontWeight: '700', marginBottom: 20}}>
            What's your mobile number
          </Text>
          <Formik
            initialValues={signUpIntialValues}
            onSubmit={handleSignup}
            validationSchema={SignupValidationSchema}>
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
                    placeholder={'Mobile Number'}
                    onChangeText={handleChange('mobileNumber')}
                    onBlur={handleBlur('mobileNumber')}
                    value={values.mobileNumber}
                    touched={touched.mobileNumber}
                    errors={errors.mobileNumber}
                    keyboardType={'numeric'}
                    maxLength={10}
                  />
                  <CustomButton
                    buttonTitle={'Sign up'}
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />
                </View>
              );
            }}
          </Formik>
          <TouchableOpacity style={{marginTop: 15}}>
            <Text style={{fontSize: 16, textAlign: 'center'}}>
              Sign up with email
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{justifyContent: 'flex-end', flex: 0.7, marginBottom: 20}}
        />
      </View>
    </View>
  );
};

export default Signup;
