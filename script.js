function showtricks() {
  const tricks = [
    "Divide the skill into smaller",
    "Focus on mastering each step before moving to the next",
    "Theory is helpful, but practical application is key!",
    "Watch videos, read books, take courses, and listen to podcasts",
    " Practicing a little every day is more effective than cramming once a week.",
    "Create a distraction-free space that helps you focus better.",
    "set challenges, and turn learning into an enjoyable experience"
  ];

  const randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
  document.getElementById("trickDisplay").innerText = randomTrick;
}