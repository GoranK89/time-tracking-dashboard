import { useState } from 'react';
import ImgProfile from '/images/image-jeremy.png';

const ProfileBox = props => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');

  const handlePeriodClick = period => {
    setSelectedPeriod(period);
    props.handlePeriodChange(period);
  };

  const setActiveClass = period => {
    return selectedPeriod === period ? 'selected' : '';
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
        <li
          onClick={() => handlePeriodClick('daily')}
          className={setActiveClass('daily')}
        >
          Daily
        </li>
        <li
          onClick={() => handlePeriodClick('weekly')}
          className={setActiveClass('weekly')}
        >
          Weekly
        </li>
        <li
          onClick={() => handlePeriodClick('monthly')}
          className={setActiveClass('monthly')}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};

export default ProfileBox;
