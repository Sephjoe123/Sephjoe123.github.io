window.addEventListener("scroll",animateOnScroll);

function animateOnScroll (){
    let reveal = document.getElementsByClassName("visible");
     for( let i = 0; i < reveal.length; i++){
        let scrollHeight = window.innerHeight;
        let scrollTop = reveal[i].getBoundingClientRect().top;
        let revealPoint = 200;
        if(scrollTop < scrollHeight - revealPoint){
           reveal[i].classList.add("show");
        }
    else{
        reveal[i].classList.remove("show")
    }
     }
}
