import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading";

const Callback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    if (code && sessionStorage.getItem('token')===null) {
      const getToken = async () => {
        await axios.get(`${import.meta.env.VITE_GITHUB_API}/getAccessToken?code=${code}`)
              .then((res) => {
                if (res.data.access_token) {
                  sessionStorage.setItem('token', res.data.access_token)
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
