import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '@/redux/reducerSlices/userSlice';
import { useRouter } from 'next/router'

export default function menuBar(){
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
      
    const dispatch = useDispatch();
      
    return(
    <>
    <div className='flex flex-col py-6 mx-4 h-4/5'>
        <button className='m-3 p-3 bg-purple-300 rounded-2xl'>Home</button>
        <button className='m-3 p-3 bg-purple-300 rounded-2xl'
                onClick={()=> router.push('/profile')}
        >Profile</button>
        <button className='m-3 p-3 bg-purple-300 rounded-2xl'>Save</button>
        <button className='m-3 p-3 bg-purple-300 rounded-2xl'>Setting</button>
    </div>
    <div className='flex flex-col justify-center h-1/5 mx-4'>
        <button onClick={handleOpen}
        className='mx-4 p-3 bg-purple-300 rounded-2xl'>
            Log Out
        </button>
    </div>
    <Modal open={open}>
    <Box className="flex flex-col items-center justify-center h-screen">
        <div className="border rounded-lg p-8">
            <h2 className="mb-4 text-xl">Are you sure you want to Log Out?</h2>
            <div className="flex justify-evenly">
                <button
                    onClick={handleClose}
                    className="px-4 py-2 text-white bg-gray-400 rounded hover:bg-gray-500"
                >
                    Cancel
                </button>
                <button
                    onClick={() => dispatch(handleLogout())}
                    className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
                >
                    Log Out
                </button>
            </div>
        </div>
    </Box>
    </Modal>
    </>
    )
}
