import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import Repository from './Repository'

type Props = {
    url : string,
}

const Repositories = (props: Props) => {
    const navigate = useNavigate()
    const [repositories, setRepositories] = useState([])

    const getRepositories = async (url:string, token:string) => {
        await axios.post("http://localhost:5000/getRepos", {
                url: url
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                if (res.data) {
                    setRepositories(res.data)
                    console.log(res.data)
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log("url",props.url)
        if(!sessionStorage.getItem('token')){
            navigate('/login')
          }else {
            getRepositories(props.url, sessionStorage.getItem('token')!)
        }

    }, [])

  return (
    <>
        {repositories.length<1 ? (<Loading/>) : (
            <div className='w-full flex flex-col gap-4'>
                <h1 className='text-[rgb(36,41,47)] text-xl md:text-2xl'>You have <span className='font-bold'>{repositories.length}</span> repositories in total</h1>
                <div className='w-full border-t border-t-gray-300 '>
                    {repositories.map((repo:any, i) => (
                        <Repository repo={repo} key={i}/>
                    ))}
                </div>
            </div>
        )}
    </>
  )
}

export default Repositories
