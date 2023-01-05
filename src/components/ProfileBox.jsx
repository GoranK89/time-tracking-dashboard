import { useState } from 'react';
import ImgProfile from '/images/image-jeremy.png';

const ProfileBox = () => {
  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(false);

  // Reminder: refactor!
  const toggleDaily = () => {
    setDaily(!daily);
    setWeekly(false);
    setMonthly(false);
  };
  const toggleWeekly = () => {
    setWeekly(!weekly);
    setDaily(false);
    setMonthly(false);
  };
  const toggleMonthly = () => {
    setMonthly(!monthly);
    setWeekly(false);
    setDaily(false);
  };

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
        <li onClick={toggleDaily} className={daily ? 'selected' : ''}>
          Daily
        </li>
        <li onClick={toggleWeekly} className={weekly ? 'selected' : ''}>
          Weekly
        </li>
        <li onClick={toggleMonthly} className={monthly ? 'selected' : ''}>
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default ProfileBox;
