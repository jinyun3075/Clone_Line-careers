let btn = document.querySelector('.btn-lang');
let btncombo = document.querySelectorAll('.btn-combo');
function logic(){
    let end =this.parentNode.parentNode.querySelectorAll('ul');
    let list = this.parentNode.querySelector('ul');
    let arrow =this.parentNode.parentNode.querySelectorAll('li span:last-child');
    let check =this.querySelector('span:last-child');
    console.log(arrow.textContent);
    if(!list.classList.contains('on')){
        end.forEach((e)=>{
            e.classList.remove('on');
        });
        
        arrow.forEach((e)=>{
            if(e.textContent=='keyboard_arrow_up')
            e.textContent='keyboard_arrow_down'});
    }
    list.classList.toggle('on');
    if(check.textContent != 'keyboard_arrow_up'){
        check.textContent = 'keyboard_arrow_up';
    }else {
        check.textContent = 'keyboard_arrow_down';
    }
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
