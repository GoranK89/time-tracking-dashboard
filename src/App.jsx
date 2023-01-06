import { useContext, useState } from 'react';
import ActivitiesContext from './context/activities-context';
import ProfileBox from './components/ProfileBox';
import TimeBox from './components/TimeBox';
import Atribution from './components/Atribution';

function App() {
  const [period, setPeriod] = useState('weekly');
  const ctx = useContext(ActivitiesContext);

  const selectedPeriodHandler = period => {
    setPeriod(period);
  };

  const TimeBoxes = () => {
    const timePeriods = {
      daily: 'daily',
      weekly: 'weekly',
      monthly: 'monthly',
    };

    return ctx.map(item => (
      <TimeBox
        key={item.title}
        activityType={item.title}
        currentHours={item.timeframes[timePeriods[period]].current}
        previousHours={item.timeframes[timePeriods[period]].previous}
        selectedPeriod={period}
      />
    ));
  };

  return (
    <main className="dashboard_container">
      <ProfileBox handlePeriodChange={selectedPeriodHandler} />
      <TimeBoxes />
      <Atribution />
    </main>
  );
}

export default App;
