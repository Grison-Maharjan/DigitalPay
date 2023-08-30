import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Link  from 'next/link';
import { setUserDetails } from '../../redux/reducerSlices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('Required!!!'),
  password: Yup.string()
    .required('Required!!!'),
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

  return( 
  <div className='flex flex-col justify-center content-center bg-cover bg-center h-screen backdrop-blur-sm' style={{ backgroundImage: `url('/LoginBg.png')`}} >
    <div className='flex m-10 mb-4 	bg-center rounded-xl bg-tuna-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-satinLinen-500' >
      <div className='flex justify-center w-1/2 border-r-2 border-tuna-200'>
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
            <h1 className='text-center text-5xl font-semibold p-3 text-tuna-950'>
              Log In
            </h1><br/>
           <lable className='text-tuna-900 font-semibold'>Phone Number</lable><br/>
            <Field name="phoneNumber" type="text" className='bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-xl p-1'/>
            {errors.phoneNumber && touched.phoneNumber ? <div className='text-satinLinen-400'>{errors.phoneNumber}</div> : null}<br/><br/>
            <lable className='text-tuna-900 font-semibold'>Password</lable><br/>
            <Field name="password" type="password" className='bg-transparent text-tuna-950 border-b-2 border-tuna-400 focus:border-tuna-950 outline-none text-xl p-1'/>
            {errors.password && touched.password ? <div className='text-satinLinen-400'>{errors.password}</div> : null}<br/><br/>
            <button type="submit" className='w-full py-2 border-2 border-tuna-600 bg-tuna-600 text-tuna-100 font-semibold rounded-md opacity-80 hover:opacity-100'>
              Log In
            </button>
          </Form>
        )}
        </Formik>
      </div>
    
      <div className='text-center w-1/2 text-tuna-900'>
        <h3 className='text-5xl my-6'>Welcome Back!</h3>
        <p className='text-4xl m-4'>Hey there! We're thrilled to have you back on our online cash app. Let's get started!</p>
        <div className='flex justify-center my-10'>
          <Image src='/LoginPics.gif' width={260} height={260} alt='LoginPic'/>
        </div>
      </div>
    </div>

    <h1 className='flex justify-center text-tuna-950 font-semibold mb-4'>Don't have an account?<Link href='/register' className='mx-2 rounded bg-tuna-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-satinLinen-500'> Sign Up</Link></h1>
  </div>)
};
 
export default Login;
