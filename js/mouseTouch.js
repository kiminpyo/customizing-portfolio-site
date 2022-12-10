let touchstartX;
let currentClassList;
let currentImg;
let currentActiveLi;
let nowActiveLi;
let mouseStart;
function processTouchMove(event) {
    event.preventDefault();

    let currentX = event.clientX || event.touches[0].screenX;
    nowActiveLi =
        Number(currentActiveLi) + (Number(currentX) - Number(touchstartX));
    // 바로 즉시 마우스 위치에 따라, 카드를 이동함
    currentClassList.style.transition = "transform 0s linear";
    currentClassList.style.transform =
        "translateX(" + String(nowActiveLi) + "px)";
}
function processTouchStart(event) {
    mouseStart = true;

    event.preventDefault();
    touchstartX = event.clientX || event.touches[0].screenX;
    currentImg = event.target;

    currentImg.addEventListener("mousemove", processTouchMove);
    currentImg.addEventListener("mouseup", processTouchEnd);

    currentImg.addEventListener("touchmove", processTouchMove);
    currentImg.addEventListener("touchend", processTouchEnd);

    currentClassList = currentImg.parentElement.parentElement;
    currentActiveLi = currentClassList.getAttribute("data-position");
}

function processTouchEnd(event) {
    event.preventDefault();

    if (mouseStart === true) {
        currentImg.removeEventListener("mousemove", processTouchMove);
        currentImg.removeEventListener("mouseup", processTouchEnd);

        currentImg.removeEventListener("touchmove", processTouchMove);
        currentImg.removeEventListener("touchend", processTouchEnd);

        currentClassList.style.transition = "transform 1s ease";
        currentClassList.style.transform = "translateX(0px)";
        currentClassList.setAttribute("data-position", 0);

        let eachSlidePrev =
            currentClassList.previousElementSibling.children[1].children[0];
        let eachSlideNext =
            currentClassList.previousElementSibling.children[1].children[1];
        let eachLiList = currentClassList.getElementsByTagName("li");
        if (currentClassList.clientWidth < eachLiList.length * 260) {
            eachSlidePrev.style.color = "#2f3059";
            eachSlidePrev.classList.add("slide-prev-hover");
            eachSlidePrev.addEventListener("click", transformPrev);

            eachSlideNext.style.color = "#cfd8dc";
            eachSlideNext.classList.remove("slide-next-hover");
            eachSlideNext.removeEventListener("click", transformNext);
        }
        mouseStart = false;
    }
}

window.addEventListener("dragend", processTouchEnd);
window.addEventListener("mouseup", processTouchEnd);

const classImgLists = document.querySelectorAll("ul li img");
for (let i = 0; i < classImgLists.length; i++) {
    classImgLists[i].addEventListener("mousedown", processTouchStart);
    classImgLists[i].addEventListener("touchstart", processTouchStart);
}
