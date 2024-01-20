import {createContext, useState} from "react";


export const ApplicationContext = createContext({
    currentUser:null,
    setCurrentUser: ()=>null,

});

export const ApplicationContextProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);


    const value = {currentUser,setCurrentUser}
    return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>
}