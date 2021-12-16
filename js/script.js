const btn = document.querySelector('.btn-lang');
const btncombo = document.querySelectorAll('.btn-combo');
const btnSite = document.querySelector('.btn-site');
const snslist =document.querySelectorAll('.snslist');
function logic (){
    const end =this.parentNode.parentNode.querySelectorAll('ul');
    const list = this.parentNode.querySelector('ul');
    const arrow =this.parentNode.parentNode.querySelectorAll('li span:last-child');
    const check =this.querySelector('span:last-child');
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

function logic2(){
    const end =this.parentNode.parentNode.querySelectorAll('ul');
    const list = this.parentNode.querySelector('ul');
    if(!list.classList.contains('on')){
        end.forEach((e)=>{
            e.classList.remove('on');
        });
    }
    list.classList.toggle('on');
}

btn.onclick = logic;
btncombo.forEach((e)=>e.onclick=logic);
btnSite.onclick =logic2;
snslist.forEach((e)=>e.onclick=logic2);

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

const chg = document.querySelectorAll('.cont-combo ul li');
chg.forEach((e)=>e.onclick=change);
function change() {
    let changeBtn = 'a';
    let word = this.querySelector('a').innerText;
    const ch =this.parentNode.parentNode.querySelector('.btn-combo');
    ch.innerHTML=`${word}<span class="material-icons-outlined">keyboard_arrow_down</span>`
    ch.parentNode.querySelector('ul').classList.toggle('on');
    
}
