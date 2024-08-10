import  {useState} from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count+1)
    }
    const decrement = () => {
        setCount(count => count-1)
    }
    const reset = () => {
        setCount(0)
    }

    return(
        <div className="counter-container">
            <p className="count-dispaly">{count}</p>

            <button className="counter-btn" onClick={decrement}>Decrement</button>
            <button className="counter-btn" onClick={reset}>Reset</button>
            <button className="counter-btn" onClick={increment}>Increment</button>
        </div>
    );



}
export default Counter
