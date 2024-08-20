if (window.innerWidth > 950){
    const city = document.querySelector(".town");
    const dropC = document.querySelector(".header__drop-city");
    window.addEventListener("click", (e)=>{
        if (e.target.classList.contains("town")) {
            dropC.style.opacity = "1";
            city.className = "town active";
        } else { dropC.style.opacity = "0"; city.className = "town";}
    })

const price = document.querySelector(".nav__link");
const dropP = document.querySelector(".header__drop-price");
window.addEventListener("click", (e)=>{
    if (e.target.classList.contains("nav__link")) {
        dropP.style.opacity = "1";
        price.className = "nav__link active";
    } else { dropP.style.opacity = "0"; price.className = "nav__link";}
})

const headerPc = document.querySelector(".headerP");
const headerMob = document.querySelector(".headerM");

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        headerPc.style.opacity = "0";
        headerMob.style.display = "flex";
    } if (scrollPosition <50){
        headerPc.style.opacity = "1";
        headerMob.style.display = "none";
    }
  });

  const cityM = document.querySelector(".townM");
  const dropCM = document.querySelector(".headerM__drop-city");

window.addEventListener("click", (e)=>{
    if (e.target.classList.contains("townM")) {
        dropCM.style.opacity = "1";
        cityM.className = "townM active";
    } else { dropCM.style.opacity = "0"; cityM.className = "townM";}
})
}

let isActiveM = false;
const bd = document.body;

document.querySelector('.headerMob__btn').addEventListener('click', function() {

    const menuMob = document.querySelector(".headerMob__menu");
    if(isActiveM){
        this.classList.toggle('active');
        menuMob.style.display = "none";
        isActiveM = false;
        bd.style.overflowY = "scroll";
    } else {
        this.classList.toggle('active');
        menuMob.style.display = "flex";
        isActiveM = true;
        bd.style.overflowY = "hidden";
    }
});

const cityMob = document.querySelector("#mobBtn");
const dropMob = document.querySelector(".headerMob__drop-price");
window.addEventListener("click", (e)=>{
    if (e.target.classList.contains("headerMob__link")) {
        dropMob.style.opacity = "1";
        cityMob.className = "headerMob__link price active";
    } else { dropMob.style.opacity = "0"; cityMob.className = "headerMob__link price";}
})

