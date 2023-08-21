import { Inter } from 'next/font/google'
import LandingPage from './landingPage'
import Home from './homePage'
import { useSelector } from 'react-redux'

const inter = Inter({subsets: ['latin']})

export default function Main() {
    const {isLoggedIn} = useSelector((state) => state.user)
    if(isLoggedIn){
        return <Home/>
    }
    else{
        return <LandingPage/>
    }
}