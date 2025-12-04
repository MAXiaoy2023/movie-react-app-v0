import { Outlet } from "react-router"
import { NavigationBarDefault } from "../components/NavigationBarDefault";

const DefaultLayout = () =>{
    return(
        <div>
            <NavigationBarDefault />
        <div>
            <Outlet />
        </div>
        </div>
    )
}

export default DefaultLayout;