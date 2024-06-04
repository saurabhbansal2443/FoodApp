import { useEffect ,useState} from "react";
import Navbar from "./Navbar"
import UserContext from "./utils/UserContext";
import { Outlet } from "react-router-dom"
import {Provider} from "react-redux"
import appStore from "./utils/appStore";
 

function App() {
  const [user , setUser] = useState("");

  useEffect(()=>{
    let data = {
     name : "Saurabh "
    }

    setUser(data);

  },[])
  return (
   <>
   <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : user , setLoggedInUser : setUser }} >
      <Navbar></Navbar>
     <Outlet></Outlet>
     </UserContext.Provider>
     </Provider>
  </>
  )
}



export default App
