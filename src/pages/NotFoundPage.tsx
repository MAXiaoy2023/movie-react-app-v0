import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { NavigationBarDefault } from "../components/NavigationBarDefault";

export default function NotFoundPage() {
    return (
        <>
            <NavigationBarDefault />
            <div className="hero min-h-screen rounded-3xl bg-[url('src/img/bg_movie.jpg')] opacity-75">
            <div className="hero-overlay rounded-3xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hi, movie lovers</h1>
                <p className="mb-5">
                    Something is wrong, the movies will be back soon. 
                </p>
                <Link to='/'>
                <button className="btn btn-primary">Back to home</button>
                </Link>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}