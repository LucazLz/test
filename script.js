/*typing*/
var typed=new Typed(".multiple-tex", {
    strings: ["Professionalità", "Esperienza", "Affidabilità"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true 
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


/*colore sullo scroll*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset&&top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    /*sticky navbar*/
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);
    header.classList.toggle('active', window.scrollY>100);
    /*rimuovi icona alternata*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*scroll reveal*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .home-content h3, .heading, .home-content p, .about-content, .home-imgSSS', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, form, .home-content h1, .about-img, .work', { origin: 'bottom' });
