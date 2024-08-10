import ComponentC from "./ComponentC.jsx"
import { useContext } from "react"
import { User } from "./ComponentA"

function ComponentB(){
    const [user,setUser] = useContext(User);
    return(
        <div className="box">
            <h1>Component B</h1>
            <h2>hello {user}</h2>
            <ComponentC/>
        </div>
    )
}
export default ComponentB
