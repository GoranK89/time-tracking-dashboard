import IconElipsis from '/images/icon-ellipsis.svg';
import IconExercise from '/images/icon-exercise.svg';
import IconPlay from '/images/icon-play.svg';
import IconSelfCare from '/images/icon-self-care.svg';
import IconSocial from '/images/icon-social.svg';
import IconStudy from '/images/icon-study.svg';
import IconWork from '/images/icon-work.svg';

const TimeBox = props => {
  // Reminder: refactor!

  const matchColors = () => {
    if (props.activityType === 'Work') {
      return 'time-box_container background-work';
    }
    if (props.activityType === 'Play') {
      return 'time-box_container background-play';
    }
    if (props.activityType === 'Study') {
      return 'time-box_container background-study';
    }
    if (props.activityType === 'Exercise') {
      return 'time-box_container background-exercise';
    }
    if (props.activityType === 'Social') {
      return 'time-box_container background-social';
    }
    if (props.activityType === 'Self Care') {
      return 'time-box_container background-self-care';
    }
  };

  const matchIcons = () => {
    if (props.activityType === 'Work') {
      return IconWork;
    }
    if (props.activityType === 'Play') {
      return IconPlay;
    }
    if (props.activityType === 'Study') {
      return IconStudy;
    }
    if (props.activityType === 'Exercise') {
      return IconExercise;
    }
    if (props.activityType === 'Social') {
      return IconSocial;
    }
    if (props.activityType === 'Self Care') {
      return IconSelfCare;
    }
  };

  return (
    <div className={matchColors()}>
      <div className="background">
        <img src={matchIcons()} alt="an icon" />
      </div>
      <div className="time-box-content_container">
        <div className="time-type_wrapper">
          <h2>{props.activityType}</h2>
          <img src={IconElipsis} alt="icon of 3 dots" />
        </div>
        <div className="time-spent_wrapper">
          <span className="current-hrs">{props.currentHours}hrs</span>
          <span className="previous-hrs">
            Last week - {props.previousHours}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeBox;
