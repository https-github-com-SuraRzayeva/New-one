const click = document.querySelector ('.click_here');
const frontWrapper = document.querySelector ('.front_wrapper');
const formWrapper = document.querySelector ('.form_wrapper');
const wholeForm = document.querySelector ('.whole_form');
const xBtn = document.querySelector ('.x_btn');
const submitbtn = document.querySelector ('.submit');
const inputs = document.querySelectorAll ('.inputti');


const bringForm = ()=> {
    frontWrapper.style.display = 'none';
    formWrapper.style.cssText = 'opacity:1; visibility:visible';
    document.querySelector('body').style.backgroundColor = 'black';
}

function returnForm () {
    frontWrapper.style.display = 'flex';
    formWrapper.style.cssText = 'opacity:0; visibility:hidden';
    document.querySelector('body').style.cssText = 'background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(cover.jpg);'
}

function inputnull () {
    inputs.forEach(x => {
        x.value = '';
    }); 
}

click.addEventListener ('click', bringForm);
xBtn.addEventListener ('click', returnForm);
submitbtn.addEventListener('click', inputnull);