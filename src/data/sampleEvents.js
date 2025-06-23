// Sample events for testing
export const sampleEvents = [
  {
    id: 1,
    name: "Invention of Time Machine",
    timestamp: 1,
    description: "The first time machine was invented",
    dependencies: []
  },
  {
    id: 2,
    name: "Time Traveler Uses Time Machine",
    timestamp: 2,
    description: "Someone uses the time machine for the first time",
    dependencies: [1] // Depends on event with id 1
  },
  {
    id: 3,
    name: "Time Traveler Meets Past Self",
    timestamp: 3,
    description: "The time traveler encounters their past self",
    dependencies: [2] // Depends on event with id 2
  }
];