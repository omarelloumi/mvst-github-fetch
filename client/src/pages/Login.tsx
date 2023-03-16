import { useEffect } from 'react'
import LoginButton from '../components/LoginButton'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(sessionStorage.getItem('token')){
          navigate('/')
        }
      }, [])

  return (
    <div className="flex flex-col gap-5 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl text-red-500">
            Please Login first
        </h1>
        <div className='text-2xl text-white min-h-14 hover:brightness-75'>
            <LoginButton />
        </div>
    </div>
  )
}

export default Login
