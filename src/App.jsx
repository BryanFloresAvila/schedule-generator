import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cell } from './components/cells/Cell';
import { createGrid } from './utils/creatGrid';
import { useState, useEffect, useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import useComponentSize from '@rehooks/component-size';
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

function App() {
  const [[totalHeight, totalWidth], setDimensions] = useState([0, 0]);
  const cellHeight = 50;
  const cellWidth = 150;
  const numHorizontalCells = 18;
  const numVerticalCells = 7;
  const root = useRef(null);
  const cellsGrid = useRef(null);
  const size = useComponentSize(parentRef);
  const grid = () => {
    if (totalHeight === null || totalWidth === null) {
      return null;
    }
    return createGrid({
      totalHeight: numVerticalCells * cellHeight,
      totalWidth: numHorizontalCells * cellWidth,
      numHorizontalCells: numHorizontalCells,
      numVerticalCells: numVerticalCells,
    });
  };
  const baseRect = grid()?.getRectFromCell({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    spanX: 1,
    spanY: 1,
  });
  //update grid when window size changes
  useEffect(() => {});
  return (
    <div className="scheduler-container" /*  style={{ height, width }} */>
      <div className="scheduler-header">
        <h1>This week scheduler header</h1>
      </div>
      <div className="scheduler-body">
        <div className="scheduler-table" ref={root}>
          <div className="layer-container">
            <div className="cells-grid" ref={cellsGrid}>
              {DAYS.map((day, dayIndex) => {
                return (
                  <div className="day-column" key={day}>
                    {HOURS.map((hour, indexHour) => {
                      return (
                        <Cell
                          key={hour}
                          rect={grid()?.getRectFromCell({
                            startX: dayIndex,
                            startY: indexHour,
                            endX: dayIndex + 1,
                            endY: indexHour + 1,
                            spanX: 1,
                            spanY: 1,
                          })}></Cell>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="timeline">
            <div>
              {HOURS.map((hour) => (
                <div key={hour} className="hour" style={{ height: '50px' }}>
                  <div className="hour-label">{hour}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="day-labels">
            <div className="labels-container">
              <div style={{ width: '150px' }}></div>
              {DAYS.map((day) => (
                <div key={day} className="day-column">
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
