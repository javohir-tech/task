
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

//Main layout
import MainLayout from './Layout/MainLayout'

//pages
import { Home } from './Pages'

//components
import ProtectedRoteted from './Components/ProtectedRoteted'

//login register
import Login from './Pages/Login'
import Register from './Pages/Register'
//actions
import { action as LoginAction } from './Pages/Login'
import { action as RegiterAction } from './Pages/Register'
import { useEffect } from 'react'

//firebase
import { auth } from './Firebase/FireBaseConfig'
import { onAuthStateChanged } from "firebase/auth";
import { useGloabalContext } from './Hooks/UseGlobalContext'


function App() {
   
  const {dispatch, alreadyAuth} = useGloabalContext()

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<ProtectedRoteted>
        <MainLayout />
      </ProtectedRoteted>),
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: "/login",
      element: (
        <ProtectedRoteted redirectIfLoggenIN>
          <Login />
        </ProtectedRoteted>
      ),
      action: LoginAction
    },
    {
      path: "/register",
      element: (
        <ProtectedRoteted redirectIfLoggenIN>
          <Register />
        </ProtectedRoteted>
      ),
      action: RegiterAction
    }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      dispatch({type:"LOGIN", payload: user})
      dispatch({type: "AUTH_READY"})
    })
  },[])
  return <>
    {alreadyAuth && <RouterProvider router={router} />}
  </>
}

export default App
