import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export function useGloabalContext () {
    const context = useContext(GlobalContext)

    if(!context){
        throw new Error('hatolik')
    }

    return context
}