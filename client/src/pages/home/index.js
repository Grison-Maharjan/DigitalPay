import React,{useState, useSelector} from 'react';
import MenuBar from '@/components/menuBar';
import MidHome from '@/components/midHome';

const home = () => {  

    return(
    <>
    {/* Whole Page */}
    <div className='flex h-screen bg-tuna-200'>

        {/* First section */}
        <div className='flex flex-col justify-between w-1/6 m-4 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500'>
            <MenuBar/>
        </div>
        
        {/* Middle section */}
        <div className='flex flex-col justify-between w-4/6'>
            <MidHome/>
        </div>

        {/* Last section */}
        <div className='flex flex-col justify-between w-1/6 m-4 rounded-xl bg-transparent bg-clip-padding backdrop-filter bg-opacity-10 shadow-2xl hover:border border-satinLinen-500'>
            <div className='flex justify-center my-2 mx-4 bg-celery-400 rounded-lg'>Transaction History</div>
        </div>
    
    </div>
    </>
    )
}
  
export default home;