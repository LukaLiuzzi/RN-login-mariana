import { useState } from "react"
import Login from "../../components/Login"
import Credentials from "../../components/Credentials"

const LoginScreen = () => {
  const [showCredentials, setShowCredentials] = useState(false)

  const handleVisualize = () => {
    setShowCredentials(!showCredentials)
  }

  return showCredentials ? (
    <Credentials handleVisualize={handleVisualize} />
  ) : (
    <Login handleVisualize={handleVisualize} />
  )
}

export default LoginScreen
