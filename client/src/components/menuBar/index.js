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
        <button className='m-3 p-3 bg-tuna-300 hover:bg-satinLinen-300 rounded-2xl'
            onClick={()=> router.push('/home')}
        >
            Home
        </button>
        <button className='m-3 p-3 bg-tuna-300 hover:bg-satinLinen-300 rounded-2xl'
            onClick={()=> router.push('/profile')}
        >
            Profile
        </button>
        <button className='m-3 p-3 bg-tuna-300 hover:bg-satinLinen-300 rounded-2xl'>Save</button>
        <button className='m-3 p-3 bg-tuna-300 hover:bg-satinLinen-300 rounded-2xl'
            onClick={()=> router.push('/setting')}
        >
            Setting
        </button>
    </div>
    <div className='flex flex-col justify-center h-1/5 mx-4'>
        <button onClick={handleOpen}
        className='mx-4 p-3 bg-tuna-300 hover:bg-satinLinen-300 rounded-2xl'>
            Log Out
        </button>
    </div>
    <Modal open={open}>
    <Box className="flex flex-col items-center justify-center h-screen">
        <div className="border border-tuna-300 rounded-lg p-8">
            <h2 className="mb-4 text-xl text-tuna-200">Are you sure you want to Log Out?</h2>
            <div className="flex justify-evenly">
                <button
                    onClick={handleClose}
                    className="px-4 py-2 text-tuna-900 bg-celery-400 rounded opacity-70 hover:opacity-100"
                >
                    Cancel
                </button>
                <button
                    onClick={() => {dispatch(handleLogout())
                        router.push('/')}}
                    className="px-4 py-2 text-tuna-900 bg-satinLinen-400 rounded opacity-70 hover:opacity-100"
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
