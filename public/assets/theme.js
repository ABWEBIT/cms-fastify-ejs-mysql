'use strict';
/*
let app = document.querySelector('.app');
const resizeApp = new ResizeObserver(entries=>{
  entries.forEach(entry=>{
    (entry.contentRect.width <= 1024) ? app.classList.remove('fullView') : app.classList.add('fullView');
  });
});

resizeApp.observe(app);


menuButton.addEventListener('click',()=>{
  menuFunc();
  resizeApp.unobserve(app);
});


// accordion
let accordion = document.querySelector('.accordion');
if(accordion){
  let elements = accordion.querySelectorAll('.element');
  elements.forEach(e=>{
    let title = e.querySelector('.title');
    title.addEventListener('click',()=>{
      e.classList.toggle('on');
    });
  });
};


let menuButton = document.getElementById('menuButton');
let menuPanel = document.getElementById('menuPanel');

menuButton.addEventListener('click',()=>{
  if(!menuPanel.classList.contains('animated')){
    menuPanel.classList.add('animated');
  };
  menuPanel.classList.toggle('on');
  menuButton.classList.toggle('on');
});
*/

/*
// no easing, no acceleration
linear: t => t,
// accelerating from zero velocity
easeInQuad: t => t*t,
// decelerating to zero velocity
easeOutQuad: t => t*(2-t),
// acceleration until halfway, then deceleration
easeInOutQuad: t => t<.5 ? 2*t*t : -1+(4-2*t)*t,
// accelerating from zero velocity 
easeInCubic: t => t*t*t,
// decelerating to zero velocity 
easeOutCubic: t => (--t)*t*t+1,
// acceleration until halfway, then deceleration 
easeInOutCubic: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1,
// accelerating from zero velocity 
easeInQuart: t => t*t*t*t,
// decelerating to zero velocity 
easeOutQuart: t => 1-(--t)*t*t*t,
// acceleration until halfway, then deceleration
easeInOutQuart: t => t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t,
// accelerating from zero velocity
easeInQuint: t => t*t*t*t*t,
// decelerating to zero velocity
easeOutQuint: t => 1+(--t)*t*t*t*t,
// acceleration until halfway, then deceleration 
easeInOutQuint: t => t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t
*/



// gallery
let gallery = document.querySelectorAll('.gallery');
gallery.forEach(e=>{
  let br = e.querySelectorAll('br');
  br.forEach(i=>i.remove());
});



// scroll to top
/*
let
  scrollToTop = document.getElementById('scrollToTop'),
  scrollToTopState = 0,
  moduleBody = document.querySelector('.module.body');

moduleBody.addEventListener('scroll',()=>{
  if(moduleBody.scrollTop > 300 && scrollToTopState == 0){
    scrollToTop.style.display = 'flex';
    scrollToTopState = 1;
  }
  else if(moduleBody.scrollTop <= 300 && scrollToTopState == 1){
    scrollToTop.style.display = 'none';
    scrollToTopState = 0;
  };
});

const toTop =()=>{
  const docY = 0;
  const bodY = moduleBody.scrollTop;
  const difY = docY - bodY;

  const duration = 400
  const startTime = performance.now();

  const step =()=>{
    const progress = (performance.now() - startTime) / duration;
    const amount = easeOutCubic(progress);
    moduleBody.scrollTop = bodY + amount * difY;
    if(progress < 0.99){
      requestAnimationFrame(step);
    }
  };

  step();
}
const easeOutCubic = t => --t * t * t + 1;
scrollToTop.addEventListener('click',()=>toTop());

// form
let resetButton = document.querySelector('.resetButton');
let sendButton = document.querySelector('.sendButton');

if(resetButton){
  resetButton.addEventListener('click',(e)=>{
    e.target.closest('form').reset();
  });
};

if(sendButton){
  sendButton.addEventListener('click',()=>{
    document.querySelector('.wpcf7-submit').click();
  });
};
*/