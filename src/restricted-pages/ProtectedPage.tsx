import { Navigate, Outlet } from "react-router";

const ProtectedPage = () => {
    const user  = {token: true}
    return(
        <div>
            {user.token ? <Outlet /> : <Navigate to="/signin"/>}
        </div>
    )

} 

export default ProtectedPage;