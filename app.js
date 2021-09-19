  let hr = document.querySelector(".hr");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");
  let milisec = document.querySelector(".milisec");
  let star_btn = document.querySelector(".star-btn");
  let stop_btn = document.querySelector(".stop-btn");
  let reset_btn= document.querySelector(".reset-btn");

let Timee = function(){
   [this.jsMilisec, this.jsHr, this.jsSec, this.jsMin] = [0,0,0,0];
    var init = () => {this.jsMilisec += 10;};
    this.counter1 = () => {
      init();
      if(this.jsMilisec > 999){
        this.jsMilisec = 0;
        this.jsSec++;
        if(this.jsSec > 59){
          this.jsSec = 0;
           this.jsMin++;
         if(this.jsMin > 59){
           this.jsMin = 0;
             this.jsHr++;
         }
        }
      }
     hr.innerHTML = this.jsHr < 10 ? "0" + this.jsHr : this.jsHr;
     min.innerHTML = this.jsMin < 10 ? "0" + this.jsMin : this.jsMin;
     sec.innerHTML = this.jsSec < 10 ? "0" + this.jsSec : this.jsSec;
     milisec.innerHTML= this.jsMilisec < 10 ? "00" + this.jsMilisec : this.jsMilisec < 100 ? "0" + this.jsMilisec : this.jsMilisec;
    }
    this.reset = () => {
      [this.jsMilisec, this.jsHr, this.jsSec, this.jsMin] = [0,0,0,0];
      hr.innerHTML = "0" + this.jsHr;
      min.innerHTML = "0" +this.jsMin;
      sec.innerHTML = "0" + 0;
      milisec.innerHTmL = "0" + 0;
    };
};

let timee = new Timee();
var timer;
star_btn.addEventListener('click', () => {
  timer = window.setInterval(timee.counter1, 10);
});

stop_btn.addEventListener('click', (e) => {
  clearInterval(timer);
});

reset_btn.addEventListener('click', () => {
   clearInterval(timer);
   timee.reset();
 });