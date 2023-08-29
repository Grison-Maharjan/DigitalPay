import React from 'react'
import IMAGE from 'next/image'
import Link  from 'next/link';
import { useRouter } from 'next/router'

const frontPage = () => {
    const router = useRouter()

    return (<>
    <div className="bg-cover bg-center w-full h-screen fixed" style={{ backgroundImage: `url('/LandingBg.png')` }}>
      <header className='bg-transparent'>
        <nav className='flex justify-between content-center bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 m-3'>
            <div className='flex'>
                <IMAGE src='/DigitalPay-logo.png' width={50} height={50} alt='DigitalPay'/>
                <div className='py-4 font-semibold text-tuna-900'>DigitalPay</div>
            </div>
            <div className='p-4 font-medium text-tuna-900'>
                <Link href='/' className='mx-2'>
                    Home
                </Link>
                <Link href='/' className='mx-2'>
                    About
                </Link>
                <Link href='' className='mx-2'>
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

    <div className='flex justify-center m-8 text-tuna-900'>
        <div>
            <h1 className='flex justify-center text-5xl font-semibold p-4'>DigitalPay</h1>
            <h2 className='flex justify-center text-center text-4xl p-4 max-w-6xl'>
            Hey there! Our webapp makes online payments a breeze. It's super easy to use and secure too. Give it a try and let us know what you think!
            </h2>
            <div className='flex flex-col items-center'>
                <ul className='text-justify text-2xl'>
                    <li className='list-disc' >Asscessible from anywhere</li>
                    <li className='list-disc'> Lets you send money to anyone</li>
                    <li className='list-disc'>Super convenient and user-friendly</li>
                </ul>
            </div>
            <div className='flex justify-center '>
            <button onClick={()=> router.push('/login')}
            className='bg-lime-600 py-4 px-10 text-tuna-200 font-bold rounded-md m-5 opacity-70 hover:opacity-100'
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
