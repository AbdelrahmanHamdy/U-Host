let backdrop=document.querySelector('.backdrop');
let modal=document.querySelector('.modal');
let selectPlanButtons =document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav'); 

for (let i=0 ;i<selectPlanButtons.length;i++){
selectPlanButtons[i].addEventListener( 'click' ,()=>{
    backdrop.style.display='block';
    modal.style.display='block';
});

}

function closeModal(){
    backdrop.style.display='none';
    modal.style.display='none';    
}
   if(modalNoButton){

       modalNoButton.addEventListener('click',closeModal);
   }


toggleButton.addEventListener('click',()=>{
    mobileNav.style.display='block';
    backdrop.style.display='block';
    if(mobileNav.style.display==='block'){
        backdrop.addEventListener('click',()=>{
            backdrop.style.display='none';
            mobileNav.style.display='none';
            });
    }  

});