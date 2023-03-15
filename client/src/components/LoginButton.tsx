const clientID = import.meta.env.VITE_CLIENT_ID
const redirectURI = import.meta.env.VITE_REDIRECT_URI

type Props = {
    isLoggedIn: Boolean
}

const LoginButton = ({isLoggedIn}:Props ) => {
  const className = "h-full px-4 rounded-md"+(isLoggedIn ? ' bg-red-600' : ' bg-[rgb(45,164,78)]')
  return <button className={className}>{isLoggedIn ? "Logout" : "Login with Github"}</button>
}

export default LoginButton
