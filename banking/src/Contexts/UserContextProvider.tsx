import React, { Dispatch, SetStateAction, useState } from 'react';

type userType = {"id" : string | null, "firstName" :  string | null, "lastName" : string | null, "role" : string | null, "loggedIn" : string | null }
type setUserType = React.Dispatch<React.SetStateAction<userType>>

interface IProps {
    user: userType;
    setUser: Dispatch<SetStateAction<userType>>;
  }
const UserContext = React.createContext<Partial<IProps>>({});

const UserContextProvider = ({ children } : any) => {
    const id: string | null = sessionStorage.getItem("id");
    const firstName : string | null  = sessionStorage.getItem("firstName");
    const lastName : string | null = sessionStorage.getItem('lastName');
    const role : string | null = sessionStorage.getItem('role');
    let loggedIn : string | null = sessionStorage.getItem("loggedIn");
    loggedIn = "true";
    const [user, setUser] = useState<userType>({ id, firstName, lastName, role, loggedIn });
    return <>
        <UserContext.Provider value ={{user, setUser}}>
            {children}
        </UserContext.Provider>
    </>;
}

export {UserContextProvider, UserContext};