
import PropTypes from 'prop-types';

function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    
    return <h2>Please login to continue</h2>
    
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
};


export default UserGreeting