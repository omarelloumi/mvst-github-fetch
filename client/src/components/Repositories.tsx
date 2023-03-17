import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import Repository from './Repository'
import Search from './Search'

/**
* A component that renders a list of repositories
* @param {object} props - Component props
* @param {string} props.url - The URL to fetch repositories from
* @returns A React component
* @example
* <Repositories url="https://api.github.com/users/username/repos" />
*/

// Declare a type for the props that this component will receive
type Props = {
    url : string, // The URL to fetch repositories from
}

const Repositories = (props: Props) => {
    const [search, setSearch] = useState("") // The search string entered by the user
    const navigate = useNavigate() // The navigate function provided by react-router-dom
    const [repositories, setRepositories] = useState([]) // The list of repositories fetched from the API
    const [filtredRepos, setFiltredRepos] = useState([]) // The list of repositories filtered by search string

    /**
    * This function is used to get repositories data from GitHub API.
    * @param url The URL of the GitHub user whose repositories data is to be fetched.
    * @param token The authentication token needed to authorize the request.
    * @returns A Promise that resolves to the repositories data in case of success, and rejects with an error message in case of failure.
    */
    const getRepositories = async (url:string, token:string) => {
        await axios.post(process.env.REACT_APP_GITHUB_API+"/getRepos", {
                url: url
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                if (res.data) {
                    setRepositories(res.data)
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    // Use the useEffect hook to fetch repositories from the API when the component mounts
    useEffect(() => {
        // Check if user is logged in, redirect to login page if not
        if(!sessionStorage.getItem('token')){
            navigate('/login')
          }else {
            // Fetch repositories from the API using the provided URL and the user's authentication token
            getRepositories(props.url, sessionStorage.getItem('token')!)
        }
    }, [])

    // Use the useEffect hook to filter the repositories based on the search string
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
