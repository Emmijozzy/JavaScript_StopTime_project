// Definition of Element
  let hr = document.querySelector(".hr");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");
  let milisec = document.querySelector(".milisec");
  let star_btn = document.querySelector(".star-btn");
  let stop_btn = document.querySelector(".stop-btn");
  let reset_btn= document.querySelector(".reset-btn");

//Construction function
 let Timee = function(){
   //definition of properties
  this.jsMilisec = {value: 0};
  this.jsHr = 0;
  this.jsSec = 0;
  this.jsMin = 0;
  
  //definition of methods
        // private methods
   // var init = ()=> {this.jsMilisec += 10;};
        //publicbmethods
    //definition of counter meth0d
  this.counter1 = () => {
    //init();
    this.jsMilisec['value'] += 10;
    if(this.jsMilisec['value'] > 999){
      this.jsMilisec['value'] = 0;
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
     milisec.innerHTML= this.jsMilisec.value < 10 ? "00" + this.jsMilisec.value : this.jsMilisec.value < 100 ? "0" + this.jsMilisec.value : this.jsMilisec.value;
  };
    // definition of reset method
    this.reset = function(){
      this.jsHr = 0;
      this.jsSec = 0;
      this.jsMin = 0;
      this.jsMilisec.value = 0;
      hr.innerHTML = "0" + this.jsHr;
      min.innerHTML = "0" +this.jsMin;
      sec.innerHTML = "0" + 0;
      milisec.innerHTmL = "0" + 0;
  };
};

//instantiation of Object
let timee = new Timee();
var timer;

// start-btn
star_btn.addEventListener('click', (e) => {
  timer = window.setInterval(timee.counter1, 10);
});

// stop-btn
stop_btn.addEventListener('click', (e) => {
  clearInterval(timer);
});

// reset-btn
reset_btn.addEventListener('click', (e) => {
  clearInterval(timer);
  timee.reset()
});

