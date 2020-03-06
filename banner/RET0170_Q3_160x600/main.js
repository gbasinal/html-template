var banner = {
  imagesLoaded: 0,
  images: ['foxtelLogo.png', 'tile01.jpg'],
  imagesSubloaded: 0, 
  subload: [ 'tile02.jpg', 'tile03.jpg', 'tile04.jpg', 'tile05.jpg' ],
  preloadSize: 0,
  subloadSize: 0,
  width: 0,
  height: 0
};


// IMAGE PRELOADER ----------------------------------
function preLoadImage(imgURL, targetElement){
  var newImage = new Image();
  newImage.onload = imageLoaded;
  newImage.src = imgURL;
}

function imageLoaded(e){
  banner.imagesLoaded ++;

  if(banner.imagesLoaded == banner.images.length && !banner.init){
    banner.init = true;
    console.log('>> ALL IMAGES LOADED')
    initBanner();
    subloadImages();
  }
}

function preloadImages() {
    for(var i=0; i<banner.images.length; i++ ) {
      //console.log('loading '+ banner.images[i] )
      preLoadImage(banner.images[i]);
    }

}

// IMAGE SUBLOADER ----------------------------------
function subloadImage(imgURL, targetElement){
  var newImage = new Image();
  newImage.onload = imageSubloaded;
  newImage.src = imgURL;
}

function subloadImages() {
    for(var s=0; s<banner.subload.length; s++ ) {
      //console.log('loading '+ banner.subload[s] )
      subloadImage(banner.subload[s]);
    }
}

function imageSubloaded(e){
  banner.imagesSubloaded ++;

  if(banner.imagesSubloaded == banner.subload.length){
    console.log('>> ALL IMAGES SUBLOADED : total Subload ' )
    if(!qamodeToggle) { startBanner(); }
  }
}


var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var queries = {ends:""};
var deadline;

var debugMode = true;
var startTime;
var endTime;
var distance = 666;
var velocity = 300;
var time = 2;
var kenburnsfactor = 1.01;
var glintX = 168;
var frames;
var mainTimeline;
var qamodeToggle = false;
var delay = 1.4;
var rondelscale = .4;
var rondelCentreX = 233;
var rondelCentreY = 422;

// INIT BANNER ----------------------------------
initBanner = function(){
  startTime = new Date();


  getQuerystring();

  console.log('queries.ends='+queries.ends);

  if(queries.ends == "tomorrow") {
    deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(23);
    deadline.setMinutes(59);
  } else if(queries.ends == "today") {
    deadline = startTime;
    deadline.setHours(23);
    deadline.setMinutes(59);
  } else {
    deadline = new Date("30 June 2019 23:59:59");
  }
  
  // initializeClock('clock', deadline);


  if (debugMode) {
    $.dragScroll();
    $.proofKey();
  }
  
  var dimensions = $('meta[name="ad.size"]').attr("content").split(',');
  for(var i=0; i<dimensions.length; i++) {
    var t = dimensions[i].split('=');
    banner[t[0]]=parseInt(t[1]);
  }

  console.log('banner ' + banner.width + 'x' + banner.height + ' init: start time ' + startTime)

  $('#banner').show();
  $('.common').show();
  $('.frame1').show();

  mainTimeline = new TimelineMax({paused: true})
  .set('#snow', {"display":"block"})
  .set('#banner', {alpha:0})
  .set('.frame',{display: "block"})
  .set('.frame-wrapper',{x: banner.width})
  .set('.frame1 .frame-wrapper',{x: 0})
  .set('.frame3 .line',{x: 0})

  .set('.tick1',{x: banner.width})

  .set('.frame5 .tick3',{x:banner.width})

  .set('.common .frame-wrapper', {x:0, opacity: 1 })  
  .to('#banner', 0.3, {alpha: 1}, 0.3 )
  .add([section1()]);
  mainTimeline.play();
  
}

proofBanner = function() {
  var t1 = new TimelineMax()
  .set('#img02', {alpha:1})
  .set('#img03', {alpha:1})

  .set('.frame1 .frame-wrapper', {x:0})
  .set('.frame2 .frame-wrapper', { x: 0 })
  .set('.frame2 .frame-wrapper .fws-flash', { opacity: 0 })

  .set('.fws', {opacity:1, scale:1})
  .set('.frame3 .frame-wrapper', {x:0})
  .set('.frame3 .tick1', {x:0})
  .set('.frame3 .line', {x:0})

  .set('.frame4 .frame-wrapper', {x:0})
  .set('.frame4 .tick1', {x:0})
  .set('.frame4 .line', {x:0})

  .set('.frame5 .frame-wrapper', {x:0, opacity: 1})
  .set('.frame5 .tick1', {x:0})
  .set('.frame5 .line', {x:0})
 
  .set('.frame5 .tick3', {x:0, opacity:1})

  .set('.common .frame-wrapper', {x:0, opacity: 1 })  

  t1.play();
}

startBanner = function() {
   mainTimeline.add([section2()],"1","sequence","+=0");
   mainTimeline.add([section3()],"2.9","sequence","+=0");
   mainTimeline.add([section4()],"5","sequence","+=0");
   mainTimeline.add([section5()],"7","sequence","+=0");
 }

stopBanner = function() {
  endTime = new Date();
  var timeInInteraction = (endTime - startTime) / 1000;
  console.log('banner ' + banner.width + 'x' + banner.height + ' stopped: time in interaction :' + timeInInteraction + 's' );
}

function section1() {
  var t1 = new TimelineMax()
  .addLabel("in",0)
  
  return t1;
}

function section2() {
  var t1 = new TimelineMax()
  .addLabel("in",1)
  .set('.frame1 .frame-wrapper',{x: 0})
  .set('.frame2', { display:"block" })
  .set('.frame2 .frame-wrapper',{x: banner.width})
  .set('.fws', {opacity:0, scale:0})
  .set('.fws-flash', {opacity:0}, "in+=0")
  .to(".frame1 .frame-wrapper", 0.8, {x:-banner.width, ease: Expo.easeInOut },"in+=0") 
  .to(".frame2 .frame-wrapper", 0.8, {x:0, ease: Expo.easeInOut },"in+=0") 
  .staggerTo(['.fws1','.fws2','.fws3','.fws4','.fws5','.fws6' ], 1, { opacity: 1, scale: 2, ease: Expo.easeOut }, .3, "in+=.5")
  .staggerTo(['.fws1','.fws2','.fws3','.fws4','.fws5','.fws6' ], 1.2, { opacity: 0, scale: 2.5, ease: Expo.easeOut}, .3, "in+=.8")
  .staggerFromTo(['.fws-flash','.fws-flash','.fws-flash','.fws-flash','.fws-flash','.fws-flash' ], .3, { overwrite:true, opacity: 0.3 }, { opacity: 0, ease: Expo.easeOut }, .3, "in+=.7")

  
  return t1;
}

function section3() {
  var t1 = new TimelineMax()
  .addLabel("in",1)
  .set('.frame3 .frame-wrapper',{x: banner.width})
  .set('.frame3 .tick1',{x: banner.width})
  .set('.frame3', { display:"block" })
  .to(".frame2 .frame-wrapper", 0.8, {x:-banner.width, ease: Expo.easeOut },"in+=0") 
  .to(".frame3 .frame-wrapper", 0.8, { x:0, ease: Expo.easeOut },"in+=0")
  .to(".frame3 .tick1", 0.8, {x:0, ease: Expo.easeOut },"in+=0") 
  

  
  return t1;  
}

function section4() {
  var t1 = new TimelineMax()
  .addLabel("in",1)
  .set('.frame4 .frame-wrapper',{x: banner.width})
  .set('.frame4 .tick1',{x: banner.width})
  .set('.frame4', { display:"block" })
  .to(".frame3 .frame-wrapper", 0.8, {x:-banner.width, ease: Expo.easeOut },"in+=0") 
  .to(".frame4 .frame-wrapper", 0.8, { x:0, ease: Expo.easeOut },"in+=0")
  .to(".frame4 .tick1", 0.8, {x:0, ease: Expo.easeOut },"in+=0") 

  return t1;
}

function section5() {
  var t1 = new TimelineMax()
  .addLabel("in",1)

  .set('.frame5 .frame-wrapper',{x: banner.width})
  .set('.frame5 .tick1',{x: banner.width})
  .set('.frame5', { display:"block" })
  .to(".frame4 .frame-wrapper", 0.8, {x:-banner.width, ease: Expo.easeOut },"in+=0") 
  .to(".frame5 .frame-wrapper", 0.8, { x:0, ease: Expo.easeOut },"in+=0")
  .to(".frame5 .tick1", 0.8, {x:0, ease: Expo.easeOut },"in+=0") 
  .to(".frame5 .tick3", 0.8, {x: 0, ease: Expo.easeOut },"in+=0")
  .to(".common .tick5", 0.8, {y: -46, ease: Expo.easeOut },"in+=0")
  .to('.frame5 .tick3', 0.5, { scale: 1.05, ease: Power1.easeOut,transformOrigin: 'center' }, 'in+=2.3')
  .to('.frame5 .tick3', 0.5, { scale: 1, ease: Power1.easeOut,transformOrigin: 'center' }, 'in+=2.55')
  .to('.frame5 .tick3', 0.5, { scale: 1.05,ease: Power1.easeOut,transformOrigin: 'center' }, 'in+=2.8')
  .to('.frame5 .tick3', 0.5, { scale: 1, ease: Power1.easeOut,transformOrigin: 'center' , onComplete:function(){
    stopBanner()
  }}, 'in+=3.05') 


  return t1;
}
