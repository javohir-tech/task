import React, { useEffect } from 'react'
import { Form, Link, useActionData } from 'react-router-dom';
import FormInput from '../Components/FormInput';
import { useRegister } from '../Hooks/useRegister';

export const action = async ({ request }) => {
    const formData = await request.formData()
    let displayName = formData.get("displayName");
    let email = formData.get("email");
    let password = formData.get("password");
    let confirm_password = formData.get("confirm_password");
    if (password == confirm_password) {
        return {
            displayName,
            email,
            password,
        };
    } else {
        alert("qayta kiriting")
    }
}

export default function Register() {

    const { singUpWithGoogle, registerWithEmailAndPassword } = useRegister()

    const inputData = useActionData()

    useEffect(() => {
        if (inputData) {
            registerWithEmailAndPassword(inputData.displayName, inputData.email, inputData.password)
        }
    }, [inputData])


    return (
        <div className="max-w-96 mx-auto h-screen flex flex-col">
            <h1 className="font-medium text-center mb-4">Login</h1>
            <div className="">
                <Form method="POST">
                    <FormInput placeholder="Full Name" name="displayName" type="text" /><br />
                    <FormInput placeholder="Email" name="email" type="email" /><br />
                    <FormInput placeholder="Password" name="password" type="password" /><br />
                    <FormInput placeholder="Password Restart " name="confirm_password" type="password" />
                    <div className="flex gap-3 mt-4">
                        <button className="btn btn-primary grow">Login</button>
                        <button onClick={singUpWithGoogle} type='button' className="btn btn-secondary grow">Google</button>
                    </div>
                </Form>
            </div>
            <div className="flex justify-center mt-3">
                <Link to="/login" className="link link-secondary">Login</Link>
            </div>
        </div>
    )
}
