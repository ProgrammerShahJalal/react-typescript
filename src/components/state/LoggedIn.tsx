import { useState } from "react"

export const LoggedIn = () => {
    const [islogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(true);
    }
    const handleLogout = () => {
        setIsLogin(false);
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {islogin ? 'Login' : 'Logout'}</div>
        </div>
    )
}