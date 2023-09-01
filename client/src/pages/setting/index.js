import React from "react";
import MenuBar from '@/components/menuBar';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const MPINSchema = Yup.object().shape({
    MPIN: Yup.number()
    .min(4, 'Must be 4 digits code!')
    .max(4, 'Must be 4 digits code!')
    .required('Required!!!'),
});

const setting = () => {
    return (
    <div className='flex h-screen bg-tuna-200'>

    <div className='flex flex-col justify-between w-1/6 m-4 mr-2 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500'>
            <MenuBar/>
    </div>

    <div className='flex flex-col justify-between w-5/6 m-4 ml-2 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500'>
        <div className='m-4'>
            <Formik
                initialValues={{
                    fullName: '', 
                    phoneNumber: '',
                    password: '',
                    gender: '',
                    email: '',
                }}
                validationSchema={MPINSchema}

                onSubmit={values => {
                    updateUser(values)
                }}
            >
                {({ errors, touched }) => (
                 <Form className='mb-4'>
                    <p className='text-tuna-950 font-semibold'>The MPIN is a secure code used for authentication and authorization in digital transactions.</p>
                    <lable className='font-bold text-tuna-950'>MPIN</lable><br/>
                        <Field name="MPIN" type="text" className='bg-transparent text-tuna-900 border-b-2 border-tuna-300 focus:border-tuna-600 outline-none text-base p-1'/>
                        {errors.MPIN && touched.MPIN ? <div className='text-satinLinen-700'>{errors.MPIN}</div> : null}<br/><br/>
                        <button type="submit" className='w-32 py-2 bg-celery-500 text-tuna-100 font-semibold rounded-md hover:bg-celery-600'>Save</button>
                 </Form>
                )}
            </Formik><br/>
            <h1 className='font-bold text-tuna-950'>Account deletion</h1>
            <p className='w-1/2 text-tuna-950 font-semibold'>We understand that you may be considering deleting your account. Please be aware of the consequences. Do you still want to delete your account?</p>
            <button type="submit" className='w-32 my-2 py-2 bg-satinLinen-400 text-tuna-950 font-semibold rounded-md hover:bg-satinLinen-500'>Delete</button>
        </div>    
    </div>

    </div>
    )
}

export default setting