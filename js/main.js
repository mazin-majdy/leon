

let loading = document.querySelector(".loading");
let span = document.getElementById("span");

let text = "....."

let i = 0;
let write = function(){
    let fun = setInterval(() => {
        
            span.textContent += text[i];
            i++;
            if(i == text.length){
                clearInterval(fun);
            }
        }, 100);

}
write();

window.onload = function(){
    setTimeout(() => {
        loading.style.display= "none";
    }, 2000);
    setTimeout(() => {
        document.body.style.overflow= "auto"
    }, 500);

}


// Toggle Menu
let toggleBtn = document.querySelector(".links .icon");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function(e){

    e.stopPropagation();

    tLinks.classList.toggle("open");
}

document.addEventListener("click", (e) => {

    if(e.target !== toggleBtn && e.target !== tLinks){

        if(tLinks.classList.contains("open")){

            tLinks.classList.toggle("open");

        }
    }
})

tLinks.onclick = function(e){
    e.stopPropagation();
}


let featuresSection = document.querySelector('.features');
let featBox = document.querySelectorAll('.features .feat');

let servicesSection = document.querySelector('.services');
let serviceImage = document.querySelector('.col .image');
let serviceDetails = document.querySelectorAll('.services .srv');

let portfolioSection = document.querySelector('.portfolio');
let firstCard = document.querySelector('.portfolio-content .card:first-of-type');
let secondCard = document.querySelector('.portfolio-content .card:nth-of-type(2)');
let thirdCard = document.querySelector('.portfolio-content .card:last-of-type');

let aboutSection = document.querySelector('.about');
let aboutImage = document.querySelector('.about .about-content .image');
let aboutText = document.querySelector('.about .about-content .text');

window.onscroll = function(){
    // Featuers Section
    if(window.scrollY > featuresSection.offsetTop -500){
        featBox.forEach(box => {
            box.style.cssText = 'transform: translateY(0); opacity: 1;'
        })
    } else {
        featBox.forEach(box => {
            box.style.cssText = 'transform: translateY(100px); opacity: 0;'
        })
    }
    // Services Section
    if(window.scrollY > servicesSection.offsetTop -300){
        serviceImage.style.cssText = 'transform: translateX(0); opacity: 1;';
        serviceDetails.forEach(sec => {
            sec.style.cssText = 'transform: translateX(0); opacity: 1;'
        })
    } else {
        serviceImage.style.cssText = 'transform: translateX(100px); opacity: 0;';
        serviceDetails.forEach(sec => {
            sec.style.cssText = 'transform: translateX(-100px); opacity: 0;'
        })
    }
    // Portfolio Section
    if(window.scrollY > portfolioSection.offsetTop -300){
        firstCard.style.cssText = 'transform: translateY(0); opacity: 1;';
    } else {
        firstCard.style.cssText = 'transform: translateY(100px); opacity: 0;';
    }
    if(window.scrollY > portfolioSection.offsetTop -200){
        secondCard.style.cssText = 'transform: translateY(0); opacity: 1;';
    } else {
        secondCard.style.cssText = 'transform: translateY(100px); opacity: 0;';
    }
    if(window.scrollY > portfolioSection.offsetTop -100){
        thirdCard.style.cssText = 'transform: translateY(0); opacity: 1;';
    } else {
        thirdCard.style.cssText = 'transform: translateY(100px); opacity: 0;';
    }

    // About Section
    if(window.scrollY > aboutSection.offsetTop -300){
        aboutImage.style.cssText = 'transform: translateX(0); opacity: 1;';
        aboutText.style.cssText = 'transform: translateX(0); opacity: 1;';
    } else {
        aboutImage.style.cssText = 'transform: translateX(-100px); opacity: 0;';
        aboutText.style.cssText = 'transform: translateX(100px); opacity: 0;';
    }
}