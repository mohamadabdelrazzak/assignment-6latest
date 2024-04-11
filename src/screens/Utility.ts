/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const loginIntialValues = {
  Username: '',
  Password: '',
};

export const validationSchema = yup.object().shape({
  Username: yup.string().required('Username is required'),
  Password: yup.string().required('Password is required'),
});

export const signUpIntialValues = {
  mobileNumber: '',
};

export const SignupValidationSchema = yup.object().shape({
  mobileNumber: yup
    .string()
    .min(10, ({min}) => `${'Mobile number must be'} ${min} ${'character'}`)
    .required('Mobile Number is required')
    .matches(/^[378]\d{9}$/, 'Mobile number should be start from 3,7,8'),
});
