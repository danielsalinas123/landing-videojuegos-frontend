const mobile_btn=document.querySelector(".navbar__mobile-btn");
const mobile_menu=document.querySelector(".navbar__mobile-list");

mobile_btn.addEventListener("click",()=>
{
    const menu_open=document.querySelector(".menu_open");
    if(!menu_open)
    {
        mobile_menu.style.display="block";
        mobile_menu.classList.add("menu_open");
    }
    else{
        mobile_menu.style.display="none";
        mobile_menu.classList.remove("menu_open"); 
    }
});

const submenu=(boton,submenu,className)=>
{
    boton.addEventListener("click",()=>
    {
        const drop=document.querySelector("."+className);
        if(!drop){
            submenu.style.display="block";
            submenu.classList.add(className);
        }
        else{
            submenu.style.display="none";
            submenu.classList.remove(className);
        }
    });
}

const dropdown1_btn=document.querySelector("#icon1");
const dropdown1_submenu=document.querySelector("#submenu1");

const dropdown2_btn=document.querySelector("#icon2");
const dropdown2_submenu=document.querySelector("#submenu2");

submenu(dropdown1_btn,dropdown1_submenu,"drop1");
submenu(dropdown2_btn,dropdown2_submenu,"drop2");

// Redimensionado de pantalla
window.addEventListener("resize",()=>
{
    let win=parseFloat(document.body.clientWidth);
    if(win>1024)
    {
        mobile_menu.style.display="none";
        mobile_menu.classList.remove("menu__open");
    }
});