import { Link } from "react-router";

const ConnectAccount = () => {
    
    return (
        <div className="flex justify-center items-center w-full  min-h-screen px-5 py-5">
        <div className="xl:max-w-5xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
            <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#6273e1]">
                Log In
            </h1>
            <div className="w-full mt-5 sm:mt-8">
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                <input
                    type="Password"
                    placeholder="Enter Your Password"
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                    <button className="btn btn-active btn-primary btn-block max-w-[200px]">
                    Validate
                    </button>
                </div>
                </div>
                <div className="flex flex-col items-center gap-1.5  justify-center pl-2">
                    <h3 className="flex items-center whitespace-nowrap text-xs text-black m-2">
                    Password Forgotten ?
                    </h3>
                    <p className="flex items-center whitespace-nowrap text-xs text-black">
                    First time on Hello movie ?
                    <Link className="text-[#4A07DA] pl-1" to="/signup">Create your account </Link>
                    </p>
                    
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ConnectAccount