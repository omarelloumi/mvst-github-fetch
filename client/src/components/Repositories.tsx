import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import Repository from './Repository'
import Search from './Search'

type Props = {
    url : string,
}

const Repositories = (props: Props) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const [repositories, setRepositories] = useState([])
    const [filtredRepos, setFiltredRepos] = useState([])

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
        if(!sessionStorage.getItem('token')){
            navigate('/login')
          }else {
            getRepositories(props.url, sessionStorage.getItem('token')!)
        }
    }, [])

    useEffect(() => {
        if (search.length > 0) {
            setFiltredRepos(repositories.filter((repo:any) => {
                return repo.name.toLowerCase().includes(search.toLowerCase())
            }))
        }else {
            setFiltredRepos([])
        }
    }, [search])

  return (
    <>
        {repositories.length<1 ? (<Loading/>) : (
            <div className='w-full flex flex-col gap-4'>
                <h1 className='text-[rgb(36,41,47)] dark:text-white text-xl md:text-2xl'>You have <span className='font-bold'>{repositories.length}</span> repositories in total</h1>
                    <Search search={search} setSearch={setSearch} filtredRepos={filtredRepos}/>
                <div className='w-full border-t border-t-gray-300'>
                    {filtredRepos.length > 0 ? filtredRepos.map((repo:any, i) => (
                        <Repository repo={repo} key={i}/>
                    )) :
                    search.length > 0 ? <h1 className='text-[rgb(36,41,47)] dark:text-white text-xl md:text-2xl mt-4 text-center'>You don't have any repositories that match.</h1> :
                    repositories.length > 0 &&
                    repositories.map((repo:any, i) => (
                        <Repository repo={repo} key={i}/>
                    ))}
                </div>
            </div>
        )}
    </>
  )
}

export default Repositories
