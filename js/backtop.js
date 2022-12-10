
function makefont(fontsize) {
    return function () {
        document.body.style.fontSize = fontsize + "rem";
    };
}
const font10 = makefont(0.8);
const font14 = makefont(1);
const font20 = makefont(1.2);
document.getElementById("font10").onclick = font10;
document.getElementById("font14").onclick = font14;
document.getElementById("font20").onclick = font20;


function background(color) {
    return function () {
        const inner = document.getElementsByClassName("inner");
        const innerArr = Array.from(inner);
        const breakError = {};
        console.log(inner);
        console.log(innerArr);
        //  https://bobbyhadz.com/blog/typescript-jump-target-cannot-cross-function-boundary  try/catch => 배경화면 다 forEach로 돌렸는데
        // 그 사이에 한개는 흰색으로 바꾸고 싶어서 continue문을 사용해 걔만 빼내려 했는데 Jump target cannot cross function boundary 와 같은 에러 만남
        // 그래서 찾아보니 try catch로 선언하고 바꾸고 싶지 않은 애는 throw로 빼낸다 (breaError라는 객체 하나 만들어준다)
        // 그런데 이건 내가 원하는 한개만 빼는게 아니라 중간에 멈춰버려서 헤더만 바뀜 그래서
        //    try{
        innerArr.forEach((v, i) => {
            console.log(inner[1]);
            if (i === 1) {
                // throw breakError
                innerArr[i].style.background = "";
            } else {
                innerArr[i].style.background = color;
                if (color === "black") {
                    document.getElementById("whitemode").style.color = "white";
                }
            }
            console.log(breakError);
            console.log(v);
        });
        // }catch(err){
        //     if(err!== breakError) throw err;
        // }
    };
}
const dark = background("black");
const white = background("");
// document.getElementById('whitemode').onclick= white;
// document.getElementById('darkmode').onclick =dark
