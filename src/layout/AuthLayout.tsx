import { Navigate, Outlet } from "react-router";
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";

const AuthLayout = () => {
    const user  = {token: true}
    return(
        <div>
            <NavigationBar />
        <div>
            {user.token ? <Outlet /> : <Navigate to="/signin"/>}
        </div>
            <Footer />
        </div>
    )

} 

export default AuthLayout;