import qs from "query-string"
import { useNavigate } from "react-router-dom"

/**
* A button component for logging in and out of the application.
* Uses sessionStorage to check if the user is currently logged in.
* If the user is logged in, displays a "Logout" button, otherwise displays a "Login" button.
* @returns A React component
*/
const LoginButton = () => {
  const navigate = useNavigate()
  const clientID = import.meta.env.VITE_CLIENT_ID
  const className = "px-6 py-2 rounded-md" + (sessionStorage.getItem('token')!==null ? ' bg-red-500':' bg-[rgb(45,164,78)]')

  /**
  * Handles the click event on the LoginButton component.
  * If the user is logged in, removes the token from sessionStorage and navigates to the Login page.
  * If the user is logged out, redirects the user to the GitHub OAuth login page.
  */
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
