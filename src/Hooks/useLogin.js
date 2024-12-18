import { auth } from '../Firebase/FireBaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';

//custom hooks
import { useGloabalContext } from './UseGlobalContext';
import { toast } from 'react-toastify';


export const useLogin = () => {
    const { dispatch } = useGloabalContext()
    const loginWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                toast.success("Hush kelipsiz")
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return { loginWithEmail }
}