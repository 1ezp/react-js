
function Button(){
    const styles = {
        backgroundColor: "#f1356d",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    }
    const handelClick = (e) => e.target.textContent = "Clicked";
    return (<button style={styles} onClick={ (e) => handelClick(e)}>Click Me</button>);
}
export default Button