import { useMemo } from 'react';
import ActivitiesContext from './activities-context';
import dataActivities from '../../data.json';

const ActivitiesProvider = props => {
  const activitiesData = useMemo(() => {
    return dataActivities.map(item => {
      return {
        title: item.title,
        timeframes: item.timeframes,
        periodDay: item.timeframes.daily,
        periodWeek: item.timeframes.weekly,
        periodMonth: item.timeframes.monthly,
      };
    });
  }, [dataActivities]);

  return (
    <ActivitiesContext.Provider value={activitiesData}>
      {props.children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;
