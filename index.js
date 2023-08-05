console.log("hi");
let head = document.querySelector('.head');
window.onscroll=function (){
    var top=window.scrollY;
    console.log(top);
    if(top>=200){
        head.classList.add('nav-coloured');        
    }
    else{
        head.classList.remove('nav-coloured');
    }
};

    const upper = document.querySelector(".upper");
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        if (upper.classList.contains('hide')) {
            upper.classList.remove('hide');
            console.log("remove hide");
        } 
        else if (!upper.classList.contains('hide')) {
            upper.classList.add('hide');
            console.log("add hide");
        } 
        
        console.log("result")
    });



























































