
//navegation

const btn_menu = document.getElementById('btn_menu');
btn_menu.addEventListener('click',()=>{
    
    const navegation = document.querySelector('.navegation');

    navegation.classList.toggle('navegation_on')
});


//in navegation the service li target (<li>service</li>) 

const btn_service = document.getElementById('service');
btn_service.addEventListener("click",()=>{

    const service__sub_menu = document.querySelector('.service__sub_menu');
    service__sub_menu.classList.toggle('service__sub_menu_on')
    
});



//in navegation the ingresar li target (<li>ingresar</li>) 

const ingresar = document.getElementById("ingresar");

ingresar.addEventListener("click",()=>{

const ingresar__sub_menu = document.querySelector('.ingresar__sub_menu');
ingresar__sub_menu.classList.toggle("ingresar__sub_menu_on");

})