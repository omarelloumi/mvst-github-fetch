import { useState, useEffect } from 'react'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'

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
        {repositories.length<1 ? (<Loading/>) : (<div></div>)}
    </>
  )
}

export default Repositories
