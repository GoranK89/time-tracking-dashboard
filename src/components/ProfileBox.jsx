import ImgProfile from '/images/image-jeremy.png';

const ProfileBox = () => {
  return (
    <div className="user-profile_container">
      <div className="profile-img-description_wrapper">
        <img src={ImgProfile} alt="profile picture of Jeremy" />

        <div className="profile-description">
          <p>Report for</p>
          <h1>
            Jeremy <br />
            Robson
          </h1>
        </div>
      </div>
      <ul className="time-periods_wrapper">
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  );
};

export default ProfileBox;
