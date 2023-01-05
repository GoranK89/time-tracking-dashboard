import { useContext } from 'react';
import ActivitiesContext from './context/activities-context';
import ProfileBox from './components/ProfileBox';
import TimeBox from './components/TimeBox';

function App() {
  const ctx = useContext(ActivitiesContext);
  console.log(ctx);

  const TimeBoxes = () => {
    return ctx.map(item => (
      <TimeBox
        key={item.title}
        activityType={item.title}
        currentHours={item.timeframes.weekly.current}
        previousHours={item.timeframes.weekly.previous}
      />
    ));
  };

  return (
    <main className="dashboard_container">
      <ProfileBox />
      <TimeBoxes />
    </main>
  );
}

export default App;
