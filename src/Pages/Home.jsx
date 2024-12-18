import { toast } from "react-toastify"
import { useGloabalContext } from "../Hooks/UseGlobalContext"
import { auth } from "../Firebase/FireBaseConfig";
import { signOut } from "firebase/auth";

export default function Home() {

  const { dispatch, user } = useGloabalContext()

  const singOutUser = async () => {
    try {
      await signOut(auth)
      dispatch({ type: "UNLOGIN" })
      toast.success("See you soon")
    } catch (error) {
      toast.error(error.message)
    }
  }
  console.log(user)
  return (
    <div className="text-center">

      <div className="max-w-48 mx-auto mb-4 mt-5">
        <img src={user.photoURL} className="rounded-full" alt="" />
        <h1 className="font-medium mt-3">{user.displayName}</h1>
      </div>

      <h1 className="font-semibold text-center mb-3">Salom Dunyo</h1>

      <button className="btn btn-primary" onClick={singOutUser}>OUT Accaunt</button>

    </div>
  )
}
