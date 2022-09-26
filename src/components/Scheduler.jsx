import React from 'react';
import Cell from './Cell';
import SlotScheduler from './SlotScheduler';
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
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
];
const Scheduler = () => {
  return (
    <div className="table relative">
      {/* Header */}
      <div className="table-cell">
        <div className="invisible">
          <Cell text="a"></Cell>
        </div>
        {HOURS.map((hour, index) => {
          return <Cell key={index} text={hour} />;
        })}
      </div>
      <div className="flex">
        {DAYS.map((day, index) => {
          return (
            <div className="flex-initial w-32">
              <Cell key={index} text={day} />
            </div>
          );
        })}
      </div>
      {/* ----- */}
      <div class="relative">
        {/* All cells */}
        <div className="flex absolute">
          <div className="flex-initial w-32">
            {HOURS.map(() => {
              return <Cell></Cell>;
            })}
          </div>
          <div className="flex-initial w-32">
            {HOURS.map(() => {
              return <Cell></Cell>;
            })}
          </div>
          <div className="flex-initial w-32">
            {HOURS.map(() => {
              return <Cell></Cell>;
            })}
          </div>
          <div className="flex-initial w-32">
            {HOURS.map(() => {
              return <Cell></Cell>;
            })}
          </div>
          <div className="flex-initial w-32">
            {HOURS.map(() => {
              return <Cell></Cell>;
            })}
          </div>
          <div className="flex-initial w-32">
            {HOURS.map(() => {
              return <Cell></Cell>;
            })}
          </div>
        </div>
        {/* All slots */}
        {/* <div className="">
          <SlotScheduler></SlotScheduler>
        </div> */}
      </div>
    </div>
  );
};

export default Scheduler;
