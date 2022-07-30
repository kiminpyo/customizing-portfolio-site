const container = Array.from(document.getElementsByClassName('roadmap-title-container'))
const data = axios.get('https://jsonplaceholder.typicode.com/posts')
.then(result => {
    const a = result.data;
    console.log(a)
    a.forEach((list,i)=> {
        container[3].innerHTML +=
        `
        <ul class="class-list">
            <li calss="class-card">
                ${list.title}
                ${list.id}
                ${list.body}
            </li>
        </ul>
        `   
    })
    

})

const fetchItems = new Promise((resolve, reject) => {
    const a = axios.get('https://jsonplaceholder.typicode.com/posts/1')
    resolve(a)
  });

const fetchItems2 = new Promise((resolve,reject)=> {
    const b = axios.get('https://jsonplaceholder.typicode.com/posts/2')
    resolve(b)
})
const add= async()=>{
    const a = await fetchItems;
    const b = await fetchItems2;
    console.log(a,b)
  try{
    if(a.status === 200){
        return b
    }
  }catch(err){
    console.error(err)
  }
    
}
add().then(v => console.log(v))
const fetchItems3 = async() =>{
    const c = await axios.get('https://jsonplaceholder.typicode.com/posts/3')
    return c
}
const fetchItems4 = async() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts/4')
    .then((res)=> console.log(res.data))
}   
fetchItems4().then( v=> console.log(v))

fetchItems3().then(v=> console.log(v))
fetchItems.then(v=> console.log(v))

const asy = async()=>{
    const a = await fetchItems3();
    const b = await fetchItems2;
    return a
}
asy().then(v=>console.log( v))



add().then((v)=> console.log(v.data))
add().then((v) => console.log(v.status))

