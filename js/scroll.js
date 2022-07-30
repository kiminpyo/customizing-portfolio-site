// 스크롤 관련 이벤트
function checkScroll(){
    // 웹페이지가 얼마나 스크롤 되어있는지,
    console.log("srollx"+ window.scrollX)
    console.log("srolly"+ window.scrollY)
    // 스크롤하기 전에 그냥 페이지 딱 봤을때 로고 포함한 크기
    console.log(window.outerHeight)
    // 내가 생각한 스크롤 방법 
    // if(Math.floor(window.scrollY) < 300){
    //     backToTop.style.visibility= "hidden"
    // }else{
    //     backToTop.style.visibility= "visible"
    // }
    
    // 강의의 스크롤 방법
    if(window.scrollY !== 0){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}
function moveBackToTop(){
    // 스크롤만큼 top으로 올리기
    // behavior은 default로 auto인데 속도의 차이
    // 내가 구현한 코드
    // scrollBy는 상대적이다. top:10을하면 현재페이지위 좌표값기준 10
    window.scrollBy({
        top : -window.scrollY,
        behavior: 'smooth'
        
    })

    //강의 코드 
    // scrollto는 절대적이다. top:10을하면 현재페이지기준이
    //  아닌 페이지 제일 상단에서 top:10을준다
    if(window.scrollY !== 0 ){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

}
const backToTop = document.getElementById('backtotop');
window.addEventListener('scroll',checkScroll)
backToTop.addEventListener('click', moveBackToTop)

///////////////////////////////////////////

function transformPrev(event){  
    console.log(event.target)
    const slidePrev = event.target;
    const slideNext = slidePrev.nextElementSibling;
    //ul 태그선택
    const classList= slidePrev.parentElement.parentElement.nextElementSibling
    let activeLi = classList.getAttribute('data-position');
    console.log(activeLi)
    const liList= classList.getElementsByTagName('li')
    // classList.clientWidth는 ul태그의 실질적인 너비
    // liList.length *260 에서 260은 각 li 요소의 실질 너비(margin포함)
    // activeLi는 data-position에 있는 현재 위치
    // 즉, liList.length *260 + Number(activeLi)는 현재 위치부터 오른쪽으로 나열되어야 하는 나머지 카드들의 너비

    // classList.clientWidth < (liList.length*260 + Number(activeLi))의 의미는
    // 오른쪽으로 나열될 카드들이 넘친 상태이므로, 왼쪽으로 이동이 가능함
    if(classList.clientWidth < liList.length * 260 + Number(activeLi)){

        activeLi = Number(activeLi) - 260;

        slideNext.style.color = '#2f3059'
        slideNext.classList.add('slide-next-hover');
        slideNext.removeEventListener('click', transformPrev)
    }

    classList.style.transition = 'transform 1s';
    classList.style.transform = `translateX(`+ String(activeLi)+ `px)`;
    classList.setAttribute(`data-position`, activeLi)
}

const slidePrevList= document.getElementsByClassName('slide-prev');
const slideNextList= document.getElementsByClassName('slide-next');
for(let i = 0; i < slidePrevList.length; i++){
        //ul 태그 선택
        let classList= slidePrevList[i].parentElement.parentElement.nextElementSibling
        let liList= classList.getElementsByTagName('li');

    //카드가 ul 태그 너비보다 넘치면, 왼쪽(prev) 버튼은 활성화 하고, 오른쪽(next)는 현재 맨 첫카드 위치이므로 비활성화
        if(classList.clientWidth < (liList.length) *260){
        slidePrevList[i].classList.add('slide-prev-hover');
        slidePrevList[i].addEventListener('click',transformPrev);


       
        }else{
        // 태그 삭제시, 부모 요소에서 removeChild를 통해 삭제해야함
        // 따라서, 1. 먼저 부모요소를 찾고 2. 부모 요소의 자식 요소로 있는 prev와 next요소를 삭제
        //parendNode = parendElement
        const arrowContainer = slidePrevList[i].parentNode;
        arrowContainer.removeChild(slidePrevList[i].nextElementSibling)
        arrowContainer.removeChild(slidePrevList[i])
    }   
}
//왼쪽부분
function transformNext(event){
    console.log(event.target)
    const slideNext = event.target;
    const classList= slideNext.parentElement.parentElement.nextElementSibling;
 
    let activeLi = classList.getAttribute('data-position')
    console.log(activeLi)
    const liList= classList.getElementsByTagName('li')
    if(  Number(activeLi)< 0){
        activeLi =  Number(activeLi) + 260;
    }
    classList.style.transition = 'transform 1s';
    classList.style.transform = `translateX(${activeLi}px)`
    classList.setAttribute(`data-position`,activeLi)
}
for(let i = 0; i < slideNextList.length; i ++){
    let classList= slideNextList[i].parentElement.parentElement.nextElementSibling
    let liList= classList.getElementsByTagName('li');

    if(classList.clientWidth< (liList.length * 260)){
        slideNextList[i].classList.add('slide-prev-hover');
        slideNextList[i].addEventListener('click',transformNext)
    }
    
}