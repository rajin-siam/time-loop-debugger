
const baseTimestamp = Date.now();

export const sampleEvents = [
  {
    id: 1,
    name: "Invention of Time Machine",
    timestamp: baseTimestamp,
    description: "The first time machine was invented in a secret lab.",
    children: [2],
  },
  {
    id: 2,
    name: "Time Traveler Uses Time Machine",
    timestamp: baseTimestamp + 1000, // 1 second later
    description: "A brave soul steps into the machine and vanishes.",
    children: [3],
  },
  {
    id: 3,
    name: "Time Traveler Meets Past Self",
    timestamp: baseTimestamp + 2000, // 2 seconds later
    description: "They meet in 1995 and discuss Avengers theories.",
    children: [],
  },
];
