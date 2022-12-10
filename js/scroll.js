// 스크롤 관련 이벤트
function checkScroll() {
    if (window.scrollY !== 0) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}
function moveBackToTop() {
    window.scrollBy({
        top: -window.scrollY,
        behavior: "smooth",
    });

    if (window.scrollY !== 0) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
}
const backToTop = document.getElementById("backtotop");
window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moveBackToTop);


function transformPrev(event) {
    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;
    //ul 태그선택
    const classList = slidePrev.parentElement.parentElement.nextElementSibling;
    let activeLi = classList.getAttribute("data-position");

    const liList = classList.getElementsByTagName("li");
    if (classList.clientWidth < liList.length * 260 + Number(activeLi)) {
        activeLi = Number(activeLi) - 260;

        slideNext.style.color = "#2f3059";
        slideNext.classList.add("slide-next-hover");
        slideNext.removeEventListener("click", transformPrev);
    }

    classList.style.transition = "transform 1s";
    classList.style.transform = `translateX(` + String(activeLi) + `px)`;
    classList.setAttribute(`data-position`, activeLi);
}

const slidePrevList = document.getElementsByClassName("slide-prev");
const slideNextList = document.getElementsByClassName("slide-next");
for (let i = 0; i < slidePrevList.length; i++) {
    //ul 태그 선택
    let classList =
        slidePrevList[i].parentElement.parentElement.nextElementSibling;
    let liList = classList.getElementsByTagName("li");

    if (classList.clientWidth < liList.length * 260) {
        slidePrevList[i].classList.add("slide-prev-hover");
        slidePrevList[i].addEventListener("click", transformPrev);
    } else {
        const arrowContainer = slidePrevList[i].parentNode;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling);
        arrowContainer.removeChild(slidePrevList[i]);
    }
}
function transformNext(event) {
    console.log(event.target);
    const slideNext = event.target;
    const classList = slideNext.parentElement.parentElement.nextElementSibling;

    let activeLi = classList.getAttribute("data-position");
    console.log(activeLi);
    const liList = classList.getElementsByTagName("li");
    if (Number(activeLi) < 0) {
        activeLi = Number(activeLi) + 260;
    }
    classList.style.transition = "transform 1s";
    classList.style.transform = `translateX(${activeLi}px)`;
    classList.setAttribute(`data-position`, activeLi);
}
for (let i = 0; i < slideNextList.length; i++) {
    let classList =
        slideNextList[i].parentElement.parentElement.nextElementSibling;
    let liList = classList.getElementsByTagName("li");

    if (classList.clientWidth < liList.length * 260) {
        slideNextList[i].classList.add("slide-prev-hover");
        slideNextList[i].addEventListener("click", transformNext);
    }
}
