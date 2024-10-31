import profilePic from './assets/No_Image_Available.jpg'

function Card() {

  return (
    <div className="card">
      <img className='card-image' src={profilePic} alt="" />
      <h2 className='card-title'>Hüseyin ÜNALAN</h2>
      <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );

}

export default Card;