// Function to add and remove the page transition screen
//Delay
function delay(n) {
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }
  
  // Function to add and remove the page transition screen
  function pageTransition1() {
  
    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleX: 1});
    tl.to('.load-text1', { duration: 1, opacity: 1, translateX: 10});
    tl.to('.load-text1', { duration: .75, opacity: 0});
    tl.to('.load-text1', { duration: 0, translateX: 0});
    tl.to('.loading-screen', { duration: .5, scaleX: 0, skewY: 0, transformOrigin: "top right", ease: "power1.out", delay: .75 }, "-=1");
  }
  
  function pageTransition2() {
    
    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleX: 1});
    tl.to('.load-text2', { duration: 1, opacity: 1, translateX: 10});
    tl.to('.load-text2', { duration: .75, opacity: 0});
    tl.to('.load-text2', { duration: 0, translateX: 0});
    tl.to('.loading-screen', { duration: .5, scaleX: 0, skewY: 0, transformOrigin: "top right", ease: "power1.out", delay: .75 }, "-=1");
  }
  
  function pageTransition3() {
  
    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleX: 1});
    tl.to('.load-text3', { duration: 1, opacity: 1, translateX: 10});
    tl.to('.load-text3', { duration: .75, opacity: 0});
    tl.to('.load-text3', { duration: 0, translateX: 0});
    tl.to('.loading-screen', { duration: .5, scaleX: 0, skewY: 0, transformOrigin: "top right", ease: "power1.out", delay: .75 }, "-=1");
  }

  function pageTransition4() {
  
    var tl = gsap.timeline();
    tl.set('.loading-screen', { transformOrigin: "bottom left"});
    tl.to('.loading-screen', { duration: .5, scaleX: 1});
    tl.to('.load-text4', { duration: 1, opacity: 1, translateX: 10});
    tl.to('.load-text4', { duration: .75, opacity: 0});
    tl.to('.load-text4', { duration: 0, translateX: 0});
    tl.to('.loading-screen', { duration: .5, scaleX: 0, skewY: 0, transformOrigin: "top right", ease: "power1.out", delay: .75 }, "-=1");
  }
  // Function to animate the content of each page
  /*function contentAnimation() {
  
    var tl = gsap.timeline();
    tl.from('.art-grid', { duration: 2.5, translateY: 20, opacity: 0});
    tl.from('nav', { duration: 2.5, opacity: 0}, "-=2");
    tl.from('.main-bg', { duration: 2, translateX: -40, opacity: 0}, "-=2.5");
  }
  */
  
  
    barba.init({
      sync: true,
  
      transitions: [
          {
          name: 'Home Transition',
          to: {
              namespace: ['home']
          },
          async leave(data) {
              const done = this.async();
              
              console.log('Home transition has been applied!');
              pageTransition1();
              await delay(1000);
              done();
          },
  
          /*async enter(data) {
            contentAnimation();
          },
    
          async once(data) {
            contentAnimation();
          } */  
          },
         
  
          {
          name: 'Gallery Transition',
          to: {
              namespace: ['gallery']
          },
          async leave(data) {
              const done = this.async();
              
              console.log('Gallery transition has been applied!');
              pageTransition2();
              await delay(1000);
              done();
          },
  
          /*async enter(data) {
            contentAnimation();
          },
      
          async once(data) {
            contentAnimation();
          }*/
          },
  
  
          {
          name: 'Web-dev Transition',
          to: {
              namespace: ['web-dev']
          },
          async leave(data) {
              const done = this.async();
              
              console.log('Web-dev transition has been applied!');
              pageTransition3();
              await delay(1000);
              done();
          },   
  
          /*async enter(data) {
            contentAnimation();
          },
     
          async once(data) {
            contentAnimation();
          }   */
          },


          {
            name: 'Contact Transition',
            to: {
                namespace: ['contact']
            },
            async leave(data) {
                const done = this.async();
                
                console.log('Contact transition has been applied!');
                pageTransition4();
                await delay(1000);
                done();
            },   
    
            /*async enter(data) {
              contentAnimation();
            },
       
            async once(data) {
              contentAnimation();
            }   */
            },
        ]
  });
  
