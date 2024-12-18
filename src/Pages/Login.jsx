import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../Components/FormInput";
import { useRegister } from "../Hooks/useRegister";
import { useLogin } from "../Hooks/useLogin";
import { useEffect } from "react";


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
        <div className="max-w-96 mx-auto h-screen flex flex-col">
            <h1 className="font-medium text-center mb-4">Login</h1>
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
            </div>
        </div>
    )
}
