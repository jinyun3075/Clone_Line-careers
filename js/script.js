const btn = document.querySelector('.btn-lang');
const btncombo = document.querySelectorAll('.btn-combo');
const btnSite = document.querySelector('.btn-site');
const snslist =document.querySelectorAll('.snslist');
const btnScrollTop = document.querySelector(".btn-scroll-top");
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const list =document.querySelector('.list-lang');
const chg = document.querySelectorAll('.cont-combo ul li');


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

function change() {
    let changeBtn = 'a';
    let word = this.querySelector('a').innerText;
    const ch =this.parentNode.parentNode.querySelector('.btn-combo');
    ch.innerHTML=`${word}<span class="material-icons-outlined">keyboard_arrow_down</span>`
    ch.parentNode.querySelector('ul').classList.toggle('on');
    
}

function scrollUpEvent() {
        window.onmousewheel = function (e) {
        // 마우스 휠 페이지 상단 방향으로 이동할 때
        if (e.wheelDelta === 120) {
        // btnScrollTop 아래에서 위로 나타남
        btnScrollTop.classList.add("scroll-up");
        //
        if (window.scrollY < 120) {
            btnScrollTop.classList.remove("scroll-up");
        }
        } else {
        btnScrollTop.classList.remove("scroll-up");
        }
    };
}

btn.onclick = logic;
btncombo.forEach((e)=>e.onclick=logic);
btnSite.onclick =logic2;
snslist.forEach((e)=>e.onclick=logic2);
chg.forEach((e)=>e.onclick=change);
scrollUpEvent();