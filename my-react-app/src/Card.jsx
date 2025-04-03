import profileImg from './assets/customers02.jpg'
function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profileImg}></img>
            <h2 className='card-title'>Vasil Tomov</h2>
            <p className='card-text'>I am learning something</p>
        </div>
    );
}
export default Card