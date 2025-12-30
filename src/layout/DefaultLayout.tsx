import { Outlet } from "react-router"
import { NavigationBarDefault } from "../components/NavigationBarDefault";
import { Footer } from "../components/Footer";

const DefaultLayout = () =>{
    return(
        <div>
            <NavigationBarDefault />
        <div>
            <Outlet />
        </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout;