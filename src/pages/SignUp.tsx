import { Link, useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form"
import { useState } from "react";

const CreateAccount = () => {
    interface IFormInput {
        firstName: string
        lastName: string
        email: string
        password: string
        confirmedPassword : string
        checkbox: boolean
    }
    
    const [isPassOk, setIsPassOk] = useState<boolean>(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data:IFormInput) => {
        if (data.password === data.confirmedPassword){
            console.log(data)
            navigate('/signin')
        }else{
            setIsPassOk(true)
        }
    }

    return (
        <div className="flex justify-center items-center w-full  min-h-screen px-5 py-5">
        <div className="xl:max-w-5xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
            <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#6273e1]">
                Create Account
            </h1>
            {isPassOk && (
                <div className="absolute text-red-500 text-xs mt-1">
                    Passwords do not match. Please try again.
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-5 sm:mt-8">
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row gap-3">
                    <input {...register("firstName", 
                            {required: "firstName is required", 
                            maxLength: { value: 20, message: "Max 20 characters"}
                        })}
                    type="text"
                    id="firstName"
                    placeholder="Enter Your First Name"
                    className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                    />
                    {errors.firstName && (<p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>)
                    }
                    <input {...register("lastName", {required: "lastName is required", 
                            maxLength : { value: 20, message: "Max 20 characters"}, 
                            pattern: /^[A-Za-z]+$/i})}
                    type="text"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                    className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                    />
                    {errors.lastName && (<p className="text-red-500 text-xs">{errors.lastName.message}</p>)
                    }
                </div>
                <input {...register("email", {required: "email is required", 
                        minLength : { value: 8, message: "Min 8 characters"}, 
                        pattern: {value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Invalid email" }})}
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                    {errors.email && (<p className="text-red-500 text-xs mt-1">{errors.email.message}</p>)
                    }
                <input {...register("password",{required: "password is required", 
                        minLength : { value: 8, message: "Min 8 characters"}} )}
                    type="Password"
                    id="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                    {errors.password && (<p className="text-[#4A07DA] text-xs">{errors.password.message}</p>)
                    }
                <input {...register("confirmedPassword", {required: "please confirm your password",
                        minLength : { value: 8, message: "Min 8 characters"}})}
                    type="Password"
                    id="confiredPassword"
                    placeholder="Confirm Your Password"
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                />
                    {errors.confirmedPassword && (<p className="text-red-500 text-xs">{errors.confirmedPassword.message}</p>)
                    }
                <div className="flex items-center gap-1.5  justify-start pl-2">
                    <div className="form-control">
                    <label className="label cursor-pointer">
                        <input {...register("checkbox",{required: "You must accept the terms and the privacy polivy"})}
                        type="checkbox"
                        className="checkbox-xs checkbox-primary"
                        />
                    </label>
                    </div>
                    <h3 className="flex items-center whitespace-nowrap text-xs text-black">
                    I agree to the
                    <span className="text-[#4A07DA]">&nbsp;Terms</span>
                    &nbsp;and
                    <span className="text-[#4A07DA]">&nbsp;Privacy Policy</span>.
                    </h3>
                </div>
                    {errors.checkbox && (<p className="text-red-500 text-xs">{errors.checkbox.message}</p>)
                    }
                <div className="flex md:flex-row gap-2 md:gap-4 justify-center items-center">
                    <button className="btn btn-active btn-primary btn-block max-w-[200px]">
                    Sign Up
                    </button>
                </div>
                <div className="flex justify-center items-center whitespace-nowrap text-xs text-black">
                    You have already an account ?
                    <Link className="text-[#4A07DA] pl-1" to="/signin">Sign In </Link>  
                </div>
                </div>
            </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default CreateAccount
