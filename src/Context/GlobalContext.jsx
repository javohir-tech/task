import { createContext, useReducer } from "react"


export const GlobalContext = createContext()

const changeState = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "LOGIN":
            return { ...state, user: payload }
        case "UNLOGIN":
            return { ...state, user:null }
            case "AUTH_READY":
                return { ...state, alreadyAuth: true }
        default:
            return state
    }
}

export function GlobalContextProvider({ children }) {
    const [state, dispatch] = useReducer(changeState, {
        user: null,
        alreadyAuth: false
    })
    return (
        <GlobalContext.Provider value={{...state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}