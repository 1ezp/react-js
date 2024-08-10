import profilePic from './assets/profile.jpg'


function Card(){
    return(
        <div className="card ">
            <img src={profilePic} alt="profile pic" />
            <h2 className='card-title'>Talon</h2>
            <p className='card-text'>Softweare Eng</p>
        </div>
    );
}
export default Card
