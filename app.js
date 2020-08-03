var time = 0;

function createHMS(time) {
  let hours = (time / 3600) % 10 | 0;
  let minutes =
    "" + (((time % 3600) / 600) | 0) + (((time % 3600) / 60) % 10 | 0);
  let second = "" + (time % 60);
  return `${hours}時間${minutes}分${second}秒 `;
}

function countDown() {
  time--;
  let currentTime = `残り時間：${createHMS(time)}`;
  document.getElementById("timer-display").innerHTML = `<p>${currentTime}</p>`;
  if (time === 0) {
    clearInterval(countTimer);
    document.getElementById("finish-display").innerHTML =
      "<h2>終了ですお疲れさまでした！</h2>";
    document.getElementById("finish-sound").play();
    switchDisabled("stop-btn");
    switchDisabled("select-time");
  }
}

function getSelectTime() {
  var selectTime = document.getElementById("select-time").value;
  time = selectTime * 60;
  document.getElementById("start-btn").disabled = false;
  document.getElementById("finish-display").innerHTML = "";
}

function startTimer() {
  countTimer = setInterval(countDown, 1000);
  document.getElementById("start-sound").play();
  switchDisabled("start-btn");
  switchDisabled("stop-btn");
  switchDisabled("select-time");
}

function stopTimer() {
  clearInterval(countTimer);
  switchDisabled("start-btn");
  switchDisabled("stop-btn");
  switchDisabled("select-time");
}

function switchDisabled(value) {
  document.getElementById(value).disabled = !document.getElementById(value)
    .disabled;
}
