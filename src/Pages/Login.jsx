import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../Components/FormInput";
import { useRegister } from "../Hooks/useRegister";
import { useLogin } from "../Hooks/useLogin";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const action = async ({ request }) => {
    const formData = await request.formData()
    let email = formData.get("email");
    let password = formData.get("password");

    return {
        email,
        password
    }
}


export default function Login() {

    const { singUpWithGoogle } = useRegister()

    const { loginWithEmail } = useLogin()

    const inputData = useActionData()

    useEffect(() => {
        if (inputData?.email && inputData?.password) {
            loginWithEmail(inputData.email, inputData.password)
        }
    }, [inputData])

    return (
        <div className=" mx-auto h-screen flex flex-col items-center justify-center">
            {/* <h1 className="font-medium text-center mb-4">Login</h1>
            <div className="">
                <Form method="POST">
                    <FormInput placeholder="Email" name="email" type="email" /><br />
                    <FormInput placeholder="Password" name="password" type="password" />
                    <div className="flex gap-3 mt-4">
                        <button className="btn btn-primary grow">Login</button>
                        <button onClick={singUpWithGoogle} type="button" className="btn btn-secondary grow">Google</button>
                    </div>
                </Form>
            </div>
            <div className="flex justify-center mt-3">
                <Link to="/register" className="link link-secondary">Register</Link>
            </div> */}

            <div className=" grid grid-cols-1 md:grid-cols-2">
                <div className="bg-base-200 py-24 px-10 w-96">
                    <h1 className="text-center font-bold text-xl mb-3">Singin</h1>
                    <Form method="POST">
                        <FormInput placeholder="Email" name="email" type="email" /><br />
                        <FormInput placeholder="Password" name="password" type="password" />
                        <div className="flex gap-3 mt-4">
                            <button className="btn btn-success text-slate-100 grow">Login</button>
                        </div>
                        <p className="my-4 text-center font-medium">or singin with</p>
                        <div className="flex gap-3 justify-center">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <FaFacebookF className="text-slate-100" />
                            </div>
                            <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
                                <button onClick={singUpWithGoogle} type="button">
                                    <FcGoogle />
                                </button>
                            </div>
                            <div className="w-8 h-8 bg-info rounded-full flex items-center justify-center">
                                <FaLinkedinIn className="text-slate-100" />
                            </div>
                        </div>
                        <div className='text-center mt-3 md:hidden'>
                            <Link to="/register" className="link link-secondary font-medium">Login Page</Link>
                        </div>
                    </Form>
                </div>
                <div className="bg-success py-10 px-10 w-96  justify-center items-center flex-col hidden md:flex">
                    <h1 className="text-slate-100 text-xl font-bold mb-5">Welcome Back</h1>
                    <p className="text-center text-slate-100 mb-5">
                        Welcome back! We are so happy to have you here . it's great to see again. We hope you had a safe and enjoyable time away
                    </p>
                    <Link to="/register" className="btn px-20 shadow-2xl bg-success backdrop-blur text-slate-100 border-0 rounded-full">Register</Link>
                </div>
            </div>
        </div>
    )
}
