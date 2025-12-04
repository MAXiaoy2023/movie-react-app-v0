
import logo_movie from '../img/logo_movie.jpg'
import Links from './Links'
import MyWatchlist from './MyWatchlist';
import { Link } from'react-router'

export function NavigationBar() {
    return (
        <nav className='flex items-center p-5 pb-10 sm-flex'>
        <img className='w-20 rounded-2xl pr-0.5' src={logo_movie} alt="logo" />
        <h1 className=' bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-5xl font-extrabold text-transparent'> Hello Movie</h1>
        <div>
            <ul className='flex pl-100 gap-5'> 
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
        <div>
            <MyWatchlist />
        </div>
        </nav>
    )
}