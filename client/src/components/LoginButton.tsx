import qs from "query-string"
import { useNavigate } from "react-router-dom"

const LoginButton = () => {
  const navigate = useNavigate()
  const clientID = import.meta.env.VITE_CLIENT_ID
  const className = "px-6 py-2 rounded-md" + (sessionStorage.getItem('token')!==null ? ' bg-red-500':' bg-[rgb(45,164,78)]')

  const handleLoginClick = () => {
    if(sessionStorage.getItem('token') !== null){
      sessionStorage.removeItem('token')
      navigate('/login')
    }else{
      const params = {
        client_id: clientID
      };
      const url = `https://github.com/login/oauth/authorize?${qs.stringify(
        params
      )}`;
      window.location.href = url;
    }
  };

  return <button className={className} onClick={handleLoginClick}>{sessionStorage.getItem('token')!==null ? ' Logout' : ' Login'}</button>
}

export default LoginButton
