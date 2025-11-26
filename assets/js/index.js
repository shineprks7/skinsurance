(function()
{


     document.addEventListener('DOMContentLoaded', function(){


        console.log("document content loaded");

        const  herotitle = document.querySelector('.hero-title');

        const  herosubtitle = document.querySelector('.hero-sub-title');
        const  heroctabutton = document.querySelector('.hero-button');
        const  heroimage = document.querySelector('.hero-image');

        

        herotitle.classList.add('show');

        herosubtitle.classList.add('show');
        heroctabutton.classList.add('show');
        heroimage.classList.add('show');

        


     });

    




})();
