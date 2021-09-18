  let hr = document.querySelector(".hr");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");
  let milisec = document.querySelector(".milisec");
  let star_btn = document.querySelector(".star-btn");
  let stop_btn = document.querySelector(".stop-btn");
  let reset_btn= document.querySelector(".reset-btn");

let [h, m, s, ms] = [0,0,0,0];

let counto = () => {
  ms += 10;
  
}



let timee = new Timee();
var timer;
star_btn.addEventListener('click', () => {
  timer = window.setInterval(timee.counter1, 10);
});

stop_btn.addEventListener('click', (e) => {
  clearInterval(timer);
});


let reseting = () =>{
  clearInterval(timer);
  timee.reset()
};
reset_btn.addEventListener('click', reseting);

console.log(timee.counter1());
//   let y = 1;
// let a = () => {
//   y++;
//   console.log(y);
// }
  
// window.setInterval(a
// , 10)