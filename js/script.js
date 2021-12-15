let btn = document.querySelector('.btn-lang');
function a(){
    let lang = document.querySelector('.list-lang');
    lang.classList.toggle('on');    
}
btn.onclick = a;

let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let list =document.querySelector('.list-lang');
window.onscroll =function() {
    let tran = [header,logo,list];
    if(window.scrollY==0) {
        tran.forEach(value=>{
            value.classList.remove('op');
        })
    } else {
        tran.forEach(value=>{
            value.classList.add('op');
        })
    }
};

