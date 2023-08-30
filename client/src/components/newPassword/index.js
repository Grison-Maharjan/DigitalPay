import React,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {updateUserDetails} from "@/redux/reducerSlices/userSlice";
export default function newPassword(){
    
    const passwordSchema = Yup.object().shape({
        password: Yup.string()
            .required('Required'),
        newPassword: Yup.string()
            .min(7, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword")],'Confirm password and New password should match!')
            .required('Required')
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const userId = useSelector((state) => state.user.userDetails)?._id;
    const updateUser = async (values) => {
        await fetch('http://localhost:8080/changePassword/${userId}', 
        { method: 'PUT',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' },
        })
    }

    return(
    <>
    <button onClick={handleOpen}>
            Change Password
    </button>
    
    <Formik
        initialValues={{
            password: '',
            newPassword: '',
            confirmPassword: ''
        }}
        validationSchema={passwordSchema}
        onSubmit={values => {
            updateUser(values)
        }}
    >
        {({ errors, touched }) => (
        <Modal open={open}>
        <Box className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col border rounded-lg p-8 bg-green-500">
                <button onClick={handleClose} className='text-white mb-2'>X</button>
                <lable className='text-tuna-200 font-semibold'>Old Password</lable><br/>
                <Field name="password" type="password" className='bg-transparent text-tuna-300 border-b-2 border-tuna-100 focus:border-tuna-500 outline-none text-base p-1'/>

                <lable className='text-tuna-200 font-semibold'>New Password</lable><br/>
                <Field name="newPassword" type="password" className='bg-transparent text-tuna-300 border-b-2 border-tuna-100 focus:border-tuna-500 outline-none text-base p-1'/>
                {errors.newPassword && touched.newPassword ? <div>{errors.newPassword}</div> : null}

                <lable className='text-tuna-200 font-semibold'>Confirm New Password</lable><br/>
                <Field name="confirmPassword" type="password" className='bg-transparent text-tuna-300 border-b-2 border-tuna-100 focus:border-tuna-500 outline-none text-base p-1'/>
                {errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}

                <button className='w-full py-1 mt-2 border-2 border-tuna-600 bg-tuna-600 text-tuna-100 font-semibold rounded-md opacity-80 hover:opacity-100'>Confirm</button>
            </div>
        </Box>
        </Modal>
        )}
    </Formik>
    </>
    )
}
