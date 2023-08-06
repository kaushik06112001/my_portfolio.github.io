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

    const navbar = document.querySelector(".navbar");
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        if (navbar.classList.contains('hide')) {
            navbar.classList.remove('hide');
            console.log("remove hide");
        } 
        else if (!navbar.classList.contains('hide')) {
            navbar.classList.add('hide');
            console.log("add hide");
        } 
        if (head.classList.contains('nav-resp')) {
            head.classList.remove('nav-resp');
            console.log("remove nav-resp");
        } 
        else if (!head.classList.contains('nav-resp')) {
            head.classList.add('nav-resp');
            console.log("add nav-resp");
        } 
        
        console.log("result")
    });



























































