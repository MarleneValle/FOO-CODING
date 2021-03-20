'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

//Map the tasks to durations in hours.

const maartjesTasks = [...monday, ...tuesday];
const maartjesHourlyRate = 20;
console.log(maartjesTasks);

function computeEarnings(tasks, hourlyRate) {
  console.log(tasks, hourlyRate);
  const earnings = tasks
    .map(day => day.duration / 60)
    .filter(duration => duration >= 2)
    .map(duration => duration * hourlyRate)
    .reduce((sum, duration) => {
      sum += duration;
      return sum;
    }, 0);
  return earnings;
}

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
console.log(`Maartje has earned ${earnings.toFixed(2)}`);




