
// 마우스 이벤트(movedown, mousemove,mouseup (dragend)
// 터치 이벤트 (touchstart, touchmove, touchend)
let touchStartX;
let currentClassList;
let currentImg;
let currentActiveLi;
let nowActiveLi;
let mouseStart;
console.log(currentActiveLi)

function processTouchMove(e){
    e.preventDefault()
   
    let currentX =  e.clientX || e.touches[0].screenX;
  
    nowActiveLi = Number(currentActiveLi) + Number(currentX) - Number(touchStartX);

    // 바로즉시 마우스 위치에 따라 카드를 이동함
    currentClassList.style.transition = "transform 0s linear";
    currentClassList.style.transform = `translateX(${String(nowActiveLi)}px)`
    console.log(touchStartX)
    console.log(currentX)
}
function processTouchStart(e){
    mouseStart = true;
    e.preventDefault()
    // 해당 요소의 고유동작을 중단시킨다(이미지만 드래그로 이동하는 고유 동작 중단).
    console.log(e,"touchStart")
    
    touchStartX = e.clientX || e.touches[0].screenX;
    currentImg= e.target;

    // 드래그 처리를 위해, 드래그 중(mousemove), 드래그가 끝났을때 (mouseup)에 이벤트를 걸어줌
    currentImg.addEventListener('mousemove', processTouchMove)
    currentImg.addEventListener('mouseup', processTouchEnd)

    currentImg.addEventListener('touchmove', processTouchMove)
    currentImg.addEventListener('touchend', processTouchEnd)

    currentClassList = currentImg.parentElement.parentElement;
    currentActiveLi = currentClassList.getAttribute('data-position')
    console.log(currentClassList)
    console.log(currentClassList.previousElementSibling)
}
function processTouchEnd(e){


    if(mouseStart === true){
        currentImg.removeEventListener('mousemove',processTouchMove)
        currentImg.removeEventListener('mouseup',processTouchEnd)
       
        currentImg.removeEventListener('touchmove',processTouchMove)
        currentImg.removeEventListener('touchend',processTouchEnd)

    }
  
    // 맨 처음 카드가 맨 앞에 배치된 상태가 될때, 화살표 버튼도 초기상태로 변경
    let  eachSlidePrev = currentClassList.previousElementSibling.children[1].children[0];
    let  eachSlideNext = currentClassList.previousElementSibling.children[1].children[1];
    let eachLiList = currentClassList.getElementsByTagName('li');
    if(currentClassList.clientWidth < (eachLiList.length *260)){
        eachSlidePrev.style.color = "#2f3059";
        eachSlidePrev.classList.add('slide-prev-hover');
        eachSlidePrev.addEventListener('click', transformPrev)

        eachSlideNext.style.color = "#efd8dc";
        eachSlidePrev.classList.remove('slide-next-hover')
        eachSlideNext.addEventListener('click',transformNext)
    }
    mouseStart = false;
}
////////////////
// 특정 요소를 드래그하다가, 요소 밖에서 드래그를 끝낼 수 있으므로, window에 이벤트 걸어줌
window.addEventListener('dragend', processTouchEnd)
window.addEventListener('mouseup', processTouchEnd)
// 인터페이스 간의 오작동을 막기 위해, 카드 내의 이미지에만 드래그 인터페이스 제공
const liList= document.querySelectorAll('ul li img')
const liListArr= Array.from(liList);
// 해당 요소의 마우스를 누르면, 드래그를 시작할 수 있으므로, 이벤트를 걸어줌
liListArr.forEach(v =>{
    v.addEventListener('mousemove', processTouchStart)
    v.addEventListener('touchstart', processTouchStart)
 
})
