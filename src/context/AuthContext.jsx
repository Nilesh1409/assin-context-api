import React,{createContext} from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
  let [details,setDetails] = React.useState({
    userName : "",
    password : "",
})
let handleChange = (e) =>{
    let {name,value} = e.target;
    
}

const [isAuth,setIsAuth] = React.useState(false);

let toggleAuth = () =>{
    setIsAuth(!isAuth);
}

return (<>
  <AuthContext.Provider value={{isAuth,toggleAuth,details,handleChange}} >{children}</AuthContext.Provider>
</>)
}

export {AuthContextProvider};