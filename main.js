const btnToggle = document.getElementById('btnToggle');
const btnHidde = document.getElementById('drawer-navigation-hidden');
const menuList = document.getElementById('drawer-navigation');

btnToggle.addEventListener('click',()=>{
    btnToggle.classList.add('max-md:invisible')
    menuList.classList.remove('max-md:-translate-x-full');
});

btnHidde.addEventListener('click', ()=> {
    btnToggle.classList.remove('max-md:invisible')
    menuList.classList.add('max-md:-translate-x-full');
});