import { useContext } from "react"
import { User } from "./ComponentA"

function ComponentC(){
    const [user,setUser] = useContext(User);
    setUser("Ali");
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>hello {user}</h2>
        </div>
    )
}
export default ComponentC