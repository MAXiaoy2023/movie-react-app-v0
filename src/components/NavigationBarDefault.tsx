
import { GiHamburgerMenu } from 'react-icons/gi'
import logo_movie from '../img/logo_movie.jpg'
import Links from './Links'
import { Link } from'react-router'

export function NavigationBarDefault() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div role="button" className="btn btn-ghost md:hidden">
                        <GiHamburgerMenu size={20}/>
                    </div>
                    <ul
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {/* <li> <Link to="/"> Home </Link></li>
                        <li> <Link to="/movies"> Movies </Link></li>
                        <li> <Link to="/profile"> Profile </Link> </li> */}
                    
                        {Links.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="btn btn-ghost">
                        <img className='w-8 md:w-15 rounded-2xl pr-0.5' src={logo_movie} alt="logo" />
                        <h1 className=' bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text font-extrabold text-transparent'> Hi</h1>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal">
                    {/* <li> <Link to="/"> Home </Link></li>
                    <li> <Link to="/movies"> Movies </Link></li>
                    <li> <Link to="/profile"> Profile </Link> </li> */}
                
                    {Links.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
    </>
    )
}