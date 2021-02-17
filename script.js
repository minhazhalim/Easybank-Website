const buttonHamburger = document.querySelector('#buttonHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
buttonHamburger.addEventListener('click',function(){
     if(header.classList.contains('open')){
          body.classList.remove('noscroll');
          header.classList.remove('open');
          fadeElements.forEach(function(element){
               element.classList.remove('fade-in');
               element.classList.add('fade-out');
          });
     }else{
          body.classList.add('noscroll');
          header.classList.add('open');
          fadeElements.forEach(function(element){
               element.classList.remove('fade-out');
               element.classList.add('fade-in');
          });
     }
});