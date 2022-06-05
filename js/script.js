function tema(){
    let element = document.querySelector('.first-cta ');
    let element1 = document.querySelector('.services');
    let element2 = document.querySelectorAll('.svg ');
    let element3 = document.querySelector('.partnerships');
    let element4 = document.querySelector('svg');
    let element5 = document.querySelector('.container > .btn');
    let element6 = document.querySelector('.footer');
    element.classList.toggle('dark');
    element1.classList.toggle('dark');
    element4.classList.toggle('dark');
    element3.classList.toggle('dark');
    element2[0,1].classList.toggle('dark');
    element5.classList.toggle('dark');
    element6.classList.toggle('dark');
    
    
} 
