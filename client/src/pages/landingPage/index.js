import React from 'react'
import IMAGE from 'next/image'
import Link  from 'next/link';
import { useRouter } from 'next/router'

const frontPage = () => {
    const router = useRouter()

    return (<>
    <div className="bg-cover bg-center w-full h-screen fixed" style={{ backgroundImage: `url('/LandingBg.png')` }}>
      <header className='bg-transparent'>
        <nav className='flex justify-between content-center p-1'>
            <div className='flex'>
                <IMAGE src='/DigitalPay-logo.png' width={50} height={50} alt='DigitalPay' className='rounded-full'/>
                <div className='p-4 font-semibold text-indigo-100'>DigitalPay</div>
            </div>
            <div className='p-4 font-medium text-indigo-700'>
                <Link href='/' className='mx-2'>
                    Home
                </Link>
                <Link href='/' className='mx-2'>
                    About
                </Link>
                <Link href='#' className='mx-2'>
                    Contact
                </Link>
                <Link href='/login' className='mx-2'>
                    Login
                </Link>
                <Link href='/register' className='mx-2'>
                    Signup
                </Link>
            </div>
        </nav> 
     </header> 

    <div className='flex justify-center m-8 text-indigo-100'>
        <div>
            <h1 className='flex justify-center text-5xl font-semibold p-4'>DigitalPay</h1>
            <h2 className='flex justify-center text-4xl p-4'>
                The modern way of cash transaction!
            </h2>
                <p className='text-center text-2xl max-w-2xl p-4'>Trusted by more than 12 million people all around the world.</p><br/>
                <ul className='text-justify px-40 text-2xl'>
                    <li className='list-disc' >Asscessible from anywhere</li>
                    <li className='list-disc'>Clear your bills</li>
                    <li className='list-disc'>Simple interface for easy use</li>
                </ul>
            <div className='flex justify-center '>
            <button onClick={()=> router.push('/login')}
            className='border-2 border-indigo-600 bg-indigo-600 py-4 px-10 text-indigo-100 rounded-md m-5 opacity-70 hover:opacity-100'
            >
                Get Started!</button>
            </div>
        </div>
    </div>
    </div>
    {/* <div>
        Contact
    </div> */}
    </>)
};
 
export default frontPage;
