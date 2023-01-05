import SvgWork from '/images/icon-work.svg';
import IconElipsis from '/images/icon-ellipsis.svg';

const TimeBox = props => {
  return (
    <div className="time-box_container">
      <div className="background">
        <img src={SvgWork} alt="an icon" />
      </div>
      <div className="time-box-content_container">
        <div className="time-type_wrapper">
          <h2>{props.activityType}</h2>
          <img src={IconElipsis} alt="icon of 3 dots" />
        </div>
        <div className="time-spent_wrapper">
          <span className="current-hrs">{props.currentHours}</span>
          <span className="previous-hrs">{props.previousHours}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeBox;
