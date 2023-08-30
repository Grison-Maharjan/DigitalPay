import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { setUserDetails } from '../../redux/reducerSlices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const {isLoggedIn} = useSelector((state)=> state.user)

  const loginUser = async (values) => {
		try {
			const response = await fetch("http://localhost:8080/logins", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			const result = await response.json();
			dispatch(setUserDetails(result))
      if(isLoggedIn) {
        router.push('./homePage')
      } 
		} catch (error) {
			console.error("Error posting data:", error);
		}
	}

  return( <div className='flex justify-center content-center bg-cover bg-center h-screen backdrop-blur-sm' style={{ backgroundImage: `url('/LoginBg.png')`}} >
    <div className='flex w-full m-14 rounded-lg	bg-cover bg-center rounded-xl bg-tuna-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-satinLinen-500' >
      <div className='flex justify-center w-1/2'>
      <Formik
        initialValues={{
          phoneNumber: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          loginUser(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='m-16'>
            <h1 className='text-center text-5xl font-semibold p-6 text-indigo-300'>
              Log In
            </h1><br/>
           <lable className='text-indigo-200 font-semibold'>Phone Number</lable><br/>
            <Field name="phoneNumber" type="text" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-xl p-1'/>
            {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}<br/><br/>
            <lable className='text-indigo-200 font-semibold'>Password</lable><br/>
            <Field name="password" type="password" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-xl p-1'/>
            {errors.password && touched.password ? <div>{errors.password}</div> : null}<br/><br/>
            <button type="submit" className='w-full py-2 border-2 border-indigo-600 bg-indigo-600 text-indigo-100 font-semibold rounded-md opacity-80 hover:opacity-100'>Submit</button>
          </Form>
        )}
        </Formik>
      </div>
    
      
      <div className='text-center w-1/2'>
        <h3 className='text-4xl my-6'>Welcome Back!</h3>
        <p className='text-5xl'>Login to get back to transaction.</p>
      </div>
    </div>
  </div>)
};
 
export default Login;
