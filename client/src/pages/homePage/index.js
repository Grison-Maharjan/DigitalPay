import React,{useState} from 'react';
import MenuBar from '@/components/menuBar';

const homePage = () => {  
    return(
    <>
    {/* Whole Page */}
    <div className='flex h-screen bg-violet-700'>

        {/* First section */}
        <div className='flex flex-col bg-red-400 h-400 justify-between w-1/6 m-4 rounded-3xl shadow-2xl'>
            <MenuBar/>
        </div>
        
        {/* Middle section */}
        <div className='w-4/6 bg-green-300'>
            <h1>Avatar</h1>
        </div>

        {/* Last section */}
        <div className='flex flex-col w-1/6 bg-blue-300'>
            <div className='flex justify-center my-3 bg-red-300 border-b-4'>Transaction History</div>
        </div>
    
    </div>
    </>
    )
}
  
export default homePage;