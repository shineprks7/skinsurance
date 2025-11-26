(function()
{
const windowclientX = 0;

const windowclientY = 0;




function debounce(funct, delay)
{
     let timer;

     return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() => {
            funct.apply(this.args);

        },delay)
     }
}

function throttle(funct, delay)
{
    let lastCall = 0;
     return function(...args)
     {
        const now = Date.now();

        if((now - lastCall) >= delay)
        {
            lastCall = now;
            funct.apply(this,args);


        }
     }
}



function handleScroll(event)
{

    




    const aboutSectionScrollReveal = document.querySelectorAll(".about-section .scroll-reveal");
    const whyChooseSectionScrollReveal = document.querySelectorAll(".why-choose-section .scroll-reveal");

    const stickyTitleWatch = document.querySelectorAll(".section-sticky-content");


    const stickyStepWrapper = document.querySelectorAll(".profile-section-step-wrapper");

    
    
    
    const retirementSectionScrollReveal = document.querySelectorAll(".retirement-section .scroll-reveal");

    const insuranceSectionScrollReveal = document.querySelectorAll(".insurance-section .scroll-reveal");
    
    const otherservicesSectionScrollReveal = document.querySelectorAll(".other-services-section .scroll-reveal");



    let viewPortHeight = window.innerHeight;

    const viewPortWidth = window.innerWidth;
    console.log("viewPortWidth "+ viewPortWidth);

    console.log("viewPortWidth typeof "+ typeof viewPortWidth);

    

    
    
    // stickyStepWrapper.forEach((el) => {


    //     let elPosition = el.getBoundingClientRect();

    //      let top = elPosition.top;
    //      let bottom = elPosition.bottom;

    //      let elheight  = el.clientHeight;

    //      let currentPosition = -top;


    //       let stickyContainer = el.querySelector('.profile-section-step-container');

                
    //       let stepper1 = el.querySelector('.profile-section-step-1');
    //       let stepper2 = el.querySelector('.profile-section-step-2');
    //       let stepper3 = el.querySelector('.profile-section-step-3');

    //       let point = elheight/100;
    
    //       let pointToPercent = Math.round((currentPosition  / point ) ,0);

    //       console.log("pointToPercent"+pointToPercent);

    //       if(currentPosition > 0 )
    //       {

    //           if(pointToPercent > 16)
    //           {
    //             stepper3.classList.add('show-stepper');
                
    //           }
    //           if(pointToPercent > 32)
    //           {
    //             stepper2.classList.add('show-stepper');
                
    //           }
    //           if(pointToPercent > 48)
    //           {
    //             stepper1.classList.add('show-stepper');
                
    //           }
              
    //       }


    //       if(top < 0   )
    //       {

    //           stickyContainer.classList.add('sticky-active');

    //       }
    //       else
    //       {
    //           stickyContainer.classList.remove('sticky-active');
   
    //       }
          

    //       if(bottom < 100 )
    //       {

    //           stickyContainer.classList.remove('sticky-active');


    //       }


    //  });

    stickyTitleWatch.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;
         let bottom = elPosition.bottom;

         let currentPosition = viewPortHeight-top;

         let wrapper = el.closest('.section-sticky-content-wrapper');

                let header = wrapper.querySelector('.section-sticky-title');


           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 30 )
            {

                header.classList.remove('sticky-active');

            }
            else if(pointToPercent > 100 )
            {

                header.classList.remove('sticky-active');

            }
            else
            {

                
               




     
            }

            
            

         }
         else
         {
           
            if(top < 0   )
            {

            header.classList.add('sticky-active');

            }
            else
            {
                header.classList.remove('sticky-active');
     
            }
            

            if(bottom < 100 )
            {

                header.classList.remove('sticky-active');


            }


         }

     });

    aboutSectionScrollReveal.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 30 )
            {

            }
            else
            {
                el.style.opacity = 1;
     
            }
            

         }
         else
         {
         }

     });
     whyChooseSectionScrollReveal.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 30)
            {
                // el.style.opacity = 0;
            }
            else
            {
                el.style.opacity = 1;
     
            }
            

         }
         else
         {
            // el.style.opacity = 0;
         }

     });

     

     insuranceSectionScrollReveal.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 30)
            {
                // el.style.opacity = 0;
            }
            else
            {
                el.style.opacity = 1;
     
            }
            

         }
         else
         {
            // el.style.opacity = 0;
         }

     });
     retirementSectionScrollReveal.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 30)
            {
                // el.style.opacity = 0;
            }
            else
            {
                el.style.opacity = 1;
     
            }
            

         }
         else
         {
            // el.style.opacity = 0;
         }

     });


     

     otherservicesSectionScrollReveal.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 30)
            {
                // el.style.opacity = 0;
            }
            else
            {
                el.style.opacity = 1;
     
            }
            

         }
         else
         {
            // el.style.opacity = 0;
         }

     });
   

     

    
    //  meetOurDoctorAnimationTriggers.forEach((el) => {


    //     let elPosition = el.getBoundingClientRect();

    //      let top = elPosition.top;

    //      let currentPosition = viewPortHeight-top;

    //        if(currentPosition > 0 && currentPosition < viewPortHeight )
    //      {


    //         let point = viewPortHeight/100;

    //         let pointToPercent = Math.round((currentPosition  / point ) ,0);

    //         console.log("pointToPercent"+pointToPercent);

    //         if(pointToPercent > 45)
    //         {
    //               el.classList.add("trigger-added");


    //             i
    //         }
            
            

    //      }
         

    //  });


     

    //  aboutUsSectionScrollTriggers.forEach((el) => {


    //     let elPosition = el.getBoundingClientRect();

    //      let top = elPosition.top;

    //      let currentPosition = viewPortHeight-top;

    //        if(currentPosition > 0 && currentPosition < viewPortHeight )
    //      {


    //         let point = viewPortHeight/100;

    //         let pointToPercent = Math.round((currentPosition  / point ) ,0);

    //         console.log("pointToPercent"+pointToPercent);

    //         if(pointToPercent > 48)
    //         {
    //               el.classList.add("trigger-added");


                
    //         }
            
            

    //      }
         

    //  });




}

let debouncedHandleScroll = throttle(handleScroll,100);


window.addEventListener("scroll", debouncedHandleScroll);


})()