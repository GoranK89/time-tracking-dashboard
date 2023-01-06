import IconElipsis from '/images/icon-ellipsis.svg';
import IconExercise from '/images/icon-exercise.svg';
import IconPlay from '/images/icon-play.svg';
import IconSelfCare from '/images/icon-self-care.svg';
import IconSocial from '/images/icon-social.svg';
import IconStudy from '/images/icon-study.svg';
import IconWork from '/images/icon-work.svg';

const activityTypeMap = {
  Work: {
    className: 'time-box_container background-work',
    icon: IconWork,
  },
  Play: {
    className: 'time-box_container background-play',
    icon: IconPlay,
  },
  Study: {
    className: 'time-box_container background-study',
    icon: IconStudy,
  },
  Exercise: {
    className: 'time-box_container background-exercise',
    icon: IconExercise,
  },
  Social: {
    className: 'time-box_container background-social',
    icon: IconSocial,
  },
  'Self Care': {
    className: 'time-box_container background-self-care',
    icon: IconSelfCare,
  },
};

const TimeBox = props => {
  const { activityType } = props;
  const { className, icon } = activityTypeMap[activityType] || {};

  const { selectedPeriod } = props;
  const displayPeriodText = () => {
    const periodMap = {
      daily: 'day',
      weekly: 'week',
      monthly: 'month',
    };

    return periodMap[selectedPeriod] || '';
  };

  return (
    <div className={className || 'time-box_container'}>
      <div className="background">
        <img src={icon || ''} alt="an icon" />
      </div>
      <div className="time-box-content_container">
        <div className="time-type_wrapper">
          <h2>{activityType}</h2>
          <img src={IconElipsis} alt="icon of 3 dots" />
        </div>
        <div className="time-spent_wrapper">
          <span className="current-hrs">{props.currentHours}hrs</span>
          <span className="previous-hrs">
            Last {displayPeriodText()} - {props.previousHours}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeBox;
