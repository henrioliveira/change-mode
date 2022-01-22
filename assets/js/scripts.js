const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')
const footer = document.getElementsByTagName('footer')


function changeMode(){
    changeClasses();
    changeText ()
};

function changeText (){
    if(button.classList.contains('dark-mode')){
        h1.innerHTML = 'Dark Mode ON';
        button.innerHTML = 'Light Mode'
    } else {
        h1.innerHTML = 'Light Mode ON';
        button.innerHTML = 'Dark Mode'
    }
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body[0].classList.toggle('dark-mode');
    footer[0].classList.toggle('dark-mode');    
}

button.addEventListener('dblclick', changeMode);