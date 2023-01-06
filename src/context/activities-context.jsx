import React from 'react';

const ActivitiesContext = React.createContext({
  title: 'Activity type',
  timeFrames: {},
  periodDay: 'daily-hrs',
  periodWeek: 'weekly-hrs',
  periodMonth: 'monthly-hrs',
});

export default ActivitiesContext;
