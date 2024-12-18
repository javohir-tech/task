import { Navigate } from "react-router-dom";
import { useGloabalContext } from "../Hooks/UseGlobalContext";


export default function ProtectedRoteted({ children, redirectIfLoggenIN }) {

    const { user } = useGloabalContext()

    if (redirectIfLoggenIN && user) {
        return <Navigate to="/" />
    }

    if (!redirectIfLoggenIN && !user) {
        return <Navigate to="/login" />
    }

    return children

}