import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UserInfo from "../components/UserInfo"
import Loading from "../components/Loading"
import Repositories from "../components/Repositories"

type Props = {
  userData: any,
  setUserData: any
}

const Home = ({userData, setUserData}:Props) => {
  const navigate = useNavigate()

  const getUserData = async (token:string) => {
    await axios.get("http://localhost:5000/getUserData", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      if (res.data) {
        setUserData(res.data)
        console.log(res.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if(!sessionStorage.getItem('token')){
      navigate('/login')
    }else {
      getUserData(sessionStorage.getItem('token')!)
    }
  }, [])

    return (
      <>
        {!userData ? (<Loading/>) : (
          <div className="w-full flex items-center justify-center dark:bg-[rgb(36,41,47)]">
            <div className="grid grid-cols-1 md:grid-cols-5 w-full max-w-7xl px-8 py-2 md:py-10">
              <div className="col-span-2 w-full pr-8">
                <UserInfo userData={userData} />
              </div>
              <div className="col-span-1 md:col-span-3 w-full border-t md:border-none border-t-gray-300">
                {(userData.repos_url && (
                  <Repositories url={userData.repos_url}/>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    )
}

export default Home
