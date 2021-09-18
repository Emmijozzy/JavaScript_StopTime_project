  let hr = document.querySelector(".hr");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");
  let milisec = document.querySelector(".milisec");
  let star_btn = document.querySelector(".star-btn");
  let stop_btn = document.querySelector(".stop-btn");
  let reset_btn= document.querySelector(".reset-btn");

let [h, m, s, ms] = [0,0,0,0];

let timer;
star_btn.addEventListener('click', (e) => {
  timer = window.setInterval(counto, 10);
});

let counto = () => {
  ms += 10;
  if (ms > 999) {
    ms = 0;
    s++;
    if (s > 59) {
      s = 0;
      m++;
      if (m > 59) {
        m = 0;
        h++;
      }
    }
  }
  hour = h < 10 ? "0" + h : h;
  minu = m < 10 ? "0" + m : m;
  se= s < 10 ? "0" + s : s;
  mil = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
  hr.innerHTML = `${hour}`, minu.innerHTmL = `${minu}`, sec.innerHTML = se,  milisec.innerHTML = `${mil}`;
}


stop_btn.addEventListener('click', (e) => {
  clearInterval(timer);
});

reset_btn.addEventListener('click', () => {
    clearInterval(timer)
    let [h, m, s, ms] = [0, 0, 0, 0];
    hr.innerHTML = "0" + h;
    min.innerHTML = "0" + m;
    sec.innerHTML = "0" + s;
    milisec.innerHTmL = `${000}`;
});