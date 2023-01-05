import { useContext } from 'react';
import ActivitiesContext from './context/activities-context';
import ProfileBox from './components/ProfileBox';
import TimeBox from './components/TimeBox';

function App() {
  const ctx = useContext(ActivitiesContext);
  console.log(ctx);

  const TimeBoxesWeek = () => {
    return ctx.map(item => (
      <TimeBox
        key={item.title}
        activityType={item.title}
        currentHours={item.timeframes.weekly.current}
        previousHours={item.timeframes.weekly.previous}
      />
    ));
  };

  //TODO make 1 for day & 1 for month

  return (
    <main className="dashboard_container">
      <ProfileBox />
      <TimeBoxesWeek />
    </main>
  );
}

export default App;
