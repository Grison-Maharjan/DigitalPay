import React,{ useState } from 'react';
import MenuBar from '@/components/menuBar';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import NewPassword from '@/components/newPassword'

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

const userProfile = () => {  

    const updateUser = async (values) => {
    await fetch('http://localhost:8080/registers', 
    { method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
    })
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);

    };
    // const handleClose = () => {
    //     setOpen(false);
    // };

    return(
    <>
    {/* Whole Page */}
    <div className='flex h-screen bg-violet-700'>

        {/* First section */}
        <div className='flex flex-col bg-red-400 h-400 justify-between w-1/6 m-4 rounded-3xl shadow-2xl'>
            <MenuBar/>
        </div>
        
        <div className='bg-red-400 w-5/6 m-4 rounded-3xl shadow-2xl'>
            <h1 className='m-4 p-2 bg-blue-400 rounded-xl'>Grison Maharjan</h1>
            <Formik
                initialValues={{
                    fullName: '', 
                    phoneNumber: '',
                    password: '',
                    gender: '',
                    email: '',
                }}
                validationSchema={SignupSchema}

                onSubmit={values => {
                    updateUser(values)
                }}
            >
                {({ errors, touched }) => (
                <Form className='m-10'>
                <h1 className='text-center text-3xl font-semibold text-indigo-300'>Account</h1><br/>
                
                <div className='flex justify-around'> 
                    <div>
                        <lable className='text-indigo-200 font-semibold'>Full Name</lable><br/>
                        <Field name="fullName" type="text" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-base p-1'/>
                        {errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}
                    </div>

                    <div>
                        <lable className='text-indigo-200 font-semibold'>Gender</lable><br/>
                        <Field name="gender" type="radio" />
                        {errors.gender && touched.gender ? <div>{errors.gender}</div> : null}
                    </div>
                </div>

                <div className='flex justify-around'>
                    <div>
                        <lable className='text-indigo-200 font-semibold'>Phone Number</lable><br/>
                        <Field name="phoneNumber" type="text" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-base p-1'/>
                        {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
                    </div>
                    <div>
                        <lable className='text-indigo-200 font-semibold'>Email</lable><br/>
                        <Field name="email" type="text" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-base p-1'/>
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    </div>
                </div>

                <div className='flex justify-around'>
                    <div>
                        <lable className='text-indigo-200 font-semibold'>Password</lable><br/>
                        <Field name="password" type="password" className='bg-transparent text-indigo-300 border-b-2 border-indigo-500 focus:border-indigo-100 outline-none text-base p-1'/>
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}
                    </div>
                    <div>
                        <button onClick={handleOpen}>Change Password
                        </button>
                    </div>
                </div>

                <button type="submit" className='w-full py-2 border-2 border-indigo-600 bg-indigo-600 text-indigo-100 font-semibold rounded-md opacity-80 hover:opacity-100'>Submit</button>
                </Form>
        )}
            </Formik>
        </div>
        
    </div>
    </>
    )
}
  
export default userProfile;