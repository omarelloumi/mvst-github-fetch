import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading";

/**
 * Callback component responsible for getting the access token from GitHub API and saving it in session storage.
 * @returns A React component
*/

const Callback = () => {
  const [searchParams] = useSearchParams(); // Get the search params from the URL
  const code = searchParams.get("code");
  const navigate = useNavigate();

  /**
   * Function responsible for getting the access token from the API and saving it in the session storage.
  */
  useEffect(() => {
    if (code && sessionStorage.getItem('token')===null) {
      const getToken = async () => {
        await axios.get(`${process.env.REACT_APP_GITHUB_API}/getAccessToken?code=${code}`)
              .then((res) => {
                if (res.data.access_token) {
                  sessionStorage.setItem('token', res.data.access_token) // Save the access token in session storage
                  navigate('/')
                }
              })
              .catch((err) => {
                console.log(err)
              })
      }
      getToken()
    }

  }, [])

  return (
    <Loading/>
  )
}

export default Callback
