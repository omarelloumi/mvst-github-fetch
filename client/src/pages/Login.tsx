import { useEffect } from 'react'
import LoginButton from '../components/LoginButton'
import { useNavigate } from "react-router-dom"

/**
  * The Login component displays a login button that redirects users to GitHub's OAuth login page.
  * If the user is already logged in, the component redirects them to the home page.
  * @returns A React component
*/

const Login = () => {
    const navigate = useNavigate()

    // Check if user is already logged in, redirect to home page if true
    useEffect(() => {
        if(sessionStorage.getItem('token')){
          navigate('/')
        }
      }, [])

  return (
    <div className="flex flex-col gap-5 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl text-[rgb(36,41,47)] dark:text-white">
            Please Login first
        </h1>
        <div className='text-2xl text-white min-h-14 hover:brightness-75'>
            <LoginButton />
        </div>
    </div>
  )
}

export default Login
