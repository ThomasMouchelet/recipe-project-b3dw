import { useState } from "react"
import AuthService from "../services/auth.service"

const Signin = ({setIsAuthenticated}) => {
    const [credentials, setCredentials] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await AuthService.signin(credentials)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Entrez votre email" name="email" onChange={handleChange} />
            <input type="password"  placeholder="Entrez votre mot de passe" name="password" onChange={handleChange} />
            <input type="submit" />
        </form>
     );
}
 
export default Signin;