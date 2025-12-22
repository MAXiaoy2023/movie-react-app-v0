import { Navigate, Outlet } from "react-router";
import { NavigationBar } from "../components/NavigationBar";

const AuthLayout = () => {
    const user  = {token: true}
    return(
        <div>
            <NavigationBar />
        <div>
            {user.token ? <Outlet /> : <Navigate to="/signin"/>}
        </div>
        </div>
    )

} 

export default AuthLayout;