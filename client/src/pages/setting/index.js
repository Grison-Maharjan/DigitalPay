import React from "react";
import MenuBar from '@/components/menuBar';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { addUserDetails, setUserDetails } from "@/redux/reducerSlices/userSlice";
import { useRouter } from "next/router";

const MPINSchema = Yup.object().shape({
    MPIN: Yup.number()
    .required('Required!!!'),
});

const setting = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { userDetails } = useSelector((state) => state.user);

    // const userMPIN = async (values) => {
    //     try{
    //     const response = await fetch('http://localhost:8080/users', 
    //     { method: 'POST',
    //         body: JSON.stringify(values),
    //         headers: { 'Content-Type': 'application/json' }, 
    //     })

    //     const result = await response.json();
    //     dispatch(setUserDetails(result))

    //     } catch (error) {
    //         console.error("Error posting data:", error);
    //     }
    // }

    // const deleterUser = async()=> {
    //     try{
    //     await fetch('http://localhost:8080/user/' + userDetails._id , 
    //     { method: 'DELETE',
    //     })
    //     } catch (error) {
    //         console.error("Error posting data:", error);
    //     }
    // }

    return (
    <div className='flex h-screen bg-rumSwizzle-200'>

    <div className='flex flex-col justify-between w-1/6 m-4 mr-2 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500'>
        <MenuBar/>
    </div>

    <div className='flex flex-col justify-between w-5/6 m-4 ml-2 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500'>
        <div className='m-4'>
            <Formik
                initialValues={{
                    MPIN: '',
                }}
                validationSchema={MPINSchema}

                onSubmit={values => {
                    userMPIN(values)
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
            <button type="submit" className='w-32 my-2 py-2 bg-satinLinen-400 text-tuna-950 font-semibold rounded-md hover:bg-satinLinen-500' onSubmit={deleterUser()}>Delete</button>
        </div>    
    </div>

    </div>
    )
}

export default setting