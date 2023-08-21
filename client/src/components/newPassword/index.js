import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';

export default function menuBar(){
    
    const passwordSchema = Yup.object().shape({
        password: Yup.string()
           .min(7, 'Too Short!')
           .max(20, 'Too Long!')
           .required('Required'),
        confirmPassword: Yup.string()
           .required('Required'),
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
    <>
    <button onClick={handleOpen}>
            Change Password
    </button>
    
    <Formik
        initialValues={{
            password: '',
        }}
        validationSchema={passwordSchema}
        onSubmit={values => {
            updateUser(values)
        }}
    >
        {({ errors, touched }) => (
        <Modal open={open}>
        <Box className="flex flex-col items-center justify-center h-screen">
            <div className="border rounded-lg p-8">
            <button onClick={handleClose}>X</button>
            <lable className='text-indigo-200 font-semibold'>Old Password</lable><br/>
            <Field name="password" type="password" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-base p-1'/>

            <lable className='text-indigo-200 font-semibold'>New Password</lable><br/>
            <Field name="password" type="password" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-base p-1'/>
            {errors.password && touched.password ? <div>{errors.password}</div> : null}

            <lable className='text-indigo-200 font-semibold'>Confirm New Password</lable><br/>
            <Field name="confirmPassword" type="password" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-base p-1'/>
            {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

            <button >Confirm</button>
            </div>
        </Box>
        </Modal>
        )}
    </Formik>
    </>
    )
}
