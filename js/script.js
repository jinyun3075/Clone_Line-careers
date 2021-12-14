let btn = document.querySelector('.btn-lang');
function a(){
    let lang = document.querySelector('.list-lang');
    lang.classList.toggle('on');    
}
btn.addEventListener('click', a);