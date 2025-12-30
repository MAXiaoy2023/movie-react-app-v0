import { Link, useNavigate } from "react-router";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(Yup) // extend yup

const ConnectAccount = () => {
    const navigate = useNavigate()
    
    // Use Yup to define the validation scheme
    const validationSchema = Yup.object({
        email: Yup.string().email('Format d\'email invalide').required('The email is required.'),
        password: Yup
            .string()
            .password().min(8, 'Minimum 8 chars')
            .minNumbers(1, 'Minimum 1 number')
            .minUppercase(1, 'Minimum 1 uppercase letter')
            .minSymbols(1, 'Minimum 1 symbol')
            .required('The password is required.')
    });

    // useFormik returns an object with various properties and methods for handling the form.
    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        validationSchema: validationSchema, // Use the Yup validation scheme
        onSubmit: values => {
        // To do : Manage the form submission logic
            console.log(values);
            navigate('/')
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center items-center w-full  min-h-screen px-5 py-5">
        <div className="xl:max-w-5xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
            <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#6273e1]">
                Log In
            </h1>
            <div className="w-full mt-5 sm:mt-8">
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <label htmlFor="email">Email : </label>    
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                <div className="text-orange-700">{formik.errors.email}</div>
                ) : null}
                <label htmlFor="password">Password : </label> 
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                <div className="text-orange-700">{formik.errors.password}</div>
                ) : null}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                    <button type="submit" className="btn btn-active btn-primary btn-block max-w-[200px]">
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
    </form>
    );
};

export default ConnectAccount