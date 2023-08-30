import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import IMAGE from 'next/image'
 
const SignupSchema = Yup.object().shape({
   fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
   phoneNumber: Yup.string()
      .min(10, 'Too Short!')
      .max(15, 'Too Long!')
      .required('Required'),
   password: Yup.string()
      .min(7, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
});
 
const Register = () => {

  const registerNewUser = async (values) => {
    await fetch('http://localhost:8080/registers', 
    { method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
    })
}

  return (
   <div className='flex justify-center content-center bg-cover bg-center h-screen backdrop-blur-sm' style={{ backgroundImage: `url('/Signup-Bg.png')`}} >
    <div className='flex w-full m-14 rounded-lg	bg-cover bg-center'  style={{ backgroundImage: `url('Co-SignupBg.png')`}} >
    <div className='flex justify-center w-1/2'>
      <Formik
       initialValues={{
         fullName: '',
         phoneNumber: '',
         password: ''
       }}
      validationSchema={SignupSchema}

      onSubmit={values => {
        registerNewUser(values)
       }}
     >
       {({ errors, touched }) => (
         <Form className='m-10'>
          <h1 className='text-center text-3xl font-semibold text-tuna-300'>Sign Up</h1><br/>

          <lable className='text-tuna-200 font-semibold'>Full Name</lable><br/>
           <Field name="fullName" type="text" className='bg-transparent text-tuna-300 border-b-2 border-tuna-500 focus:border-tuna-100 outline-none text-base p-1'/>
           {errors.fullName && touched.fullName ? (<div>{errors.fullName}</div>) : null}<br/><br/>

          <lable className='text-tuna-200 font-semibold'>Phone Number</lable><br/>
           <Field name="phoneNumber" type="text" className='bg-transparent text-tuna-300 border-b-2 border-tuna-500 focus:border-tuna-100 outline-none text-base p-1'/>
           {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}<br/><br/>
           
           <lable className='text-tuna-200 font-semibold'>Password</lable><br/>
           <Field name="password" type="password" className='bg-transparent text-tuna-300 border-b-2 border-tuna-500 focus:border-tuna-100 outline-none text-base p-1'/>
           {errors.password && touched.password ? <div>{errors.password}</div> : null}<br/><br/>
           
           <button type="submit" className='w-full py-2 border-2 border-tuna-600 bg-tuna-600 text-tuna-100 font-semibold rounded-md opacity-80 hover:opacity-100'>Submit</button>
         </Form>
       )}
     </Formik>
    </div>

    <div className='text-center w-1/2'>
      <h3 className='text-4xl my-6'>Welcome to DigitalPay!</h3>
      <p className='text-5xl'>Sign Up to transact in modern way.</p>
    </div>
   </div>
  </div>)
};

 export default Register