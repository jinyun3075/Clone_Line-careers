let btn = document.querySelector('.btn-lang');
let btncombo = document.querySelectorAll('.btn-combo');
function logic(){
    let end =this.parentNode.parentNode.querySelectorAll('ul');
    end.forEach((e)=>e.classList.remove('on'));
    let list = this.parentNode.querySelector('ul');
    list.classList.toggle('on');
    // let check =this.querySelector('span:last-child').textContent;
    // console.log(check)
}
btn.onclick = logic;
btncombo.forEach((e)=>e.onclick=logic);

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
