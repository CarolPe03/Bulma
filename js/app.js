const mainContent= document.querySelector('#container');
const navbar=document.querySelector('.navbar')

const navAction = e => {
    e.preventDefault();
    if(e.target.classList.contains('navbar-item') 
    || e.target.classList.contains('button')){
        console.log(e.target.innerHTML);

        switch(opcion){
            case 'Home':
                loadData('../pages/home.html');
            case 'Tabla':
                loadData('../pages/tables.html');
            case 'Log in':
                loadData('../pages/login.html');
                break;
        }
       
    }
}

const loadData = (pageUrl) =>{
    fetch(pageUrl)
    .then(page => {
        return page.text();
    })
    .then(contentHtml => {
        if(mainContent.firstChild){
            mainContent.removeChild(mainContent.firstChild);
        }
        const div=document.createElement('div');
        div.innerHTML=contentHtml;
        mainContent.appendChild(div);
    })
}


window.addEventListener('DOMContentLoaded',() => {
loadData('../pages/home.html');

navbar.addEventListener('click',loadData);
})



