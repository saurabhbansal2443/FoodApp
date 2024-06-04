import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : {
        name : "no-user "
    },
    setLoggedInUser : null ,
  }
)

export default UserContext;