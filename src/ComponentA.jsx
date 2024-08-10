import { useState } from "react"
import ComponentB from "./ComponentB.jsx"
import { createContext } from "react";

export const User = createContext();

function ComponentA(){

    const [user, setUser] = useState("hikmet");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>hello {user}</h2>

            <User.Provider value={[user,setUser]}>
                <ComponentB/>
            </User.Provider>
        </div>
    )
}
export default ComponentA