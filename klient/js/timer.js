const timerContainer = document.getElementById("timer-container");

export function startTimerButton() {
  const startTimerBtn = document.createElement("button");
  startTimerBtn.classList.add("start-timer-btn");
  startTimerBtn.id = "start-timer-btn";
  startTimerBtn.innerText = "Start timer";
  timerContainer.appendChild(startTimerBtn);

  startTimerBtn.addEventListener("click", renderTimer);
}

export function renderTimer() {
  const timer = document.createElement("div");
  timer.classList.add("timer");
  timer.id = "timer";
  timerContainer.append(timer);

  const timerText = document.createElement("p");
  timerText.id = "timer-text";
  timer.append(timerText);

  startTimer();
}

function startTimer() {
  let secondsLeft = 60;

  const timerText = document.getElementById("timer-text");
  timerText.innerText = formatTime(secondsLeft);

  const countdown = setInterval(() => {
    secondsLeft--;
    timerText.innerText = formatTime(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
