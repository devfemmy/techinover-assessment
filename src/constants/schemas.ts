import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().required('email is required'),
  password: yup
    .string()
    .min(4, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
