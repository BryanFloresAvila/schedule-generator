import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cell } from './components/cells/Cell';
import Draggable from 'react-draggable';
function App() {
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const HOURS = [
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    'Noon',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
    '12 AM',
  ];

  return (
    <div className="container">
      <div className="container-grid">
        <div className="column">
          <div className="cell_header_col"></div>
          {HOURS.map((hour, index) => (
            <div className="cell_header_col" key={index}>
              {hour}
            </div>
          ))}
        </div>
        <div className="column">
          <div className="cell_header_header">{DAYS[0]}</div>
          {HOURS.map((hour, index) => (
            <Cell key={index} />
          ))}
        </div>
        <div className="column">
          <div className="cell_header_header">{DAYS[1]}</div>
          {HOURS.map((hour, index) => (
            <Cell key={index} />
          ))}
        </div>
        <div className="column">
          <div className="cell_header_header">{DAYS[2]}</div>
          {HOURS.map((hour, index) => (
            <Cell key={index} />
          ))}
        </div>
        <div className="column">
          <div className="cell_header_header">{DAYS[3]}</div>
          {HOURS.map((hour, index) => (
            <Cell key={index} />
          ))}
        </div>
        <div className="column">
          <div className="cell_header_header">{DAYS[4]}</div>
          {HOURS.map((hour, index) => (
            <Cell key={index} />
          ))}
        </div>
        <div className="column">
          <div className="cell_header_header">{DAYS[5]}</div>
          {HOURS.map((hour, index) => (
            <Cell key={index} />
          ))}
        </div>
        <div className="column">
          <div className="cell_header_header">{DAYS[6]}</div>
          {HOURS.map((hour, index) => (
            <Cell key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
