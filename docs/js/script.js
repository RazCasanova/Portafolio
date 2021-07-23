const btn_inicio = document.getElementById('btn-inicio')
window.addEventListener("scroll",(e)=>{
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scroll >105) {
        btn_inicio.classList.remove("hidden");
    }else{
        btn_inicio.classList.add("hidden");   
    }
});

function btn_i(){
    window.scrollTo({
        behavior:"smooth",
        top:0,

    });
}

var mql = window.matchMedia('(min-width: 931px)');
let btn_menu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu');
function screenTest(e) {
  if (e.matches) {
    btn_menu.classList.replace('visible','hidden');
    menu.classList.replace('hidden', 'visible');
  } else {
    menu.classList.replace('visible','hidden');
    btn_menu.classList.replace('hidden','visible');
    btn_menu.classList.replace('relative','fixed');

    btn_menu.addEventListener("click",()=>{
        if (btn_menu.classList == 'btn-menu visible fixed') {
            btn_menu.classList.replace('fixed','relative');
            menu.classList.replace('hidden','visible');
        } else {
          btn_menu.classList.replace('relative','fixed');
          menu.classList.replace('visible','hidden');
        }
    });
  }
}

mql.addListener(screenTest);
screenTest(mql);