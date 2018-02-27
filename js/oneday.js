const countDate = new Date("Feb 26, 2018 00:00:00").getTime();

const interval = setInterval( () => {
  dateFunc();
}, 1000);

const dateFunc = () => {
  const now = new Date().getTime();
  const distanceFrom = now - countDate;
  const oneDay = 86400000;
  let intervalDist;
  if(distanceFrom > oneDay){
    const countDays = Math.floor(distanceFrom/oneDay);
    intervalDist = (oneDay + oneDay * countDays) - distanceFrom;
  }else{
    intervalDist = oneDay - distanceFrom;
  }
  buildTimer(intervalDist);
}

const buildTimer = (distance) => {
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML ="<span class='hr'> " + hours + "h</span><span class='min'>"
+ minutes + "m</span><span class='sec'>" + seconds + "s</span> ";
}

dateFunc();
