const countDate = new Date("Feb 26, 2018 00:00:00").getTime();

const interval = setInterval( () => {
  dateFunc();
}, 1000);

const dateFunc = () => {
  const now = new Date().getTime();
  const distanceFrom = now - countDate;
  const sevenDays = 86400000 * 7;
  let intervalDist;
  if(distanceFrom > sevenDays){
    const countWeeks = Math.floor(distanceFrom/sevenDays);
    intervalDist = (sevenDays + sevenDays * countWeeks) - distanceFrom;
  }else{
    intervalDist = sevenDays - distanceFrom;
  }
  buildTimer(intervalDist);
}

const buildTimer = (distance) => {
  const days = Math.floor(distance/ (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = "<span class='day'> " + days + "d</span><span class='hr'> " + hours + "h</span><span class='min'>"
+ minutes + "m</span><span class='sec'>" + seconds + "s</span> ";
}

dateFunc();
