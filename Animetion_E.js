const menu_items_mane = document.querySelector(".electrolaboratory .menu_items_mane");
const menu_items_services = document.querySelector(".electrolaboratory .menu_items_services");
const menu_items_phone_call = document.querySelector(".electrolaboratory .menu_items_phone_call");
const menu_items_mounting = document.querySelector(".electrolaboratory .menu_items_mounting");
const menu_items_designing = document.querySelector(".electrolaboratory .menu_items_designing");

const Scroll_Pos = window.scrollY;

function E_M(){
    document.location.href = "index.html";
}
menu_items_mane.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

menu_items_services.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

function E_Mounting() {
    document.location.href = "Mounting.html";
}
menu_items_mounting.addEventListener('click', function () {
    setTimeout(E_Mounting,400);
});

function E_Designing() {
    document.location.href = "Designing.html";
}
menu_items_designing.addEventListener('click', function () {
    setTimeout(E_Designing,400);
});

menu_items_phone_call.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

const Electrolaboratory_Services_Container = document.querySelector(".services .container");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 150) {
        Electrolaboratory_Services_Container.setAttribute("style","animation: Left_Right 1s;");
    }
});

const Electrolaboratory_Types_Tests_H2 = document.querySelector(".types_tests .h2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 800) {
        Electrolaboratory_Types_Tests_H2.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Electrolaboratory_Types_Tests_Сontainer = document.querySelector(".electrolaboratory .types_tests .container");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 900) {
        Electrolaboratory_Types_Tests_Сontainer.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Animetion_Arrow_Top = document.querySelector(".top_arrow");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 1250){
        Animetion_Arrow_Top.setAttribute("style","display: block;");
    }else {
        if(Scroll_Pos < 1) {
            Animetion_Arrow_Top.setAttribute("style","display: none;");
        }
    }
});
function A_R_T(){
    window.scrollTo({
        top: 0
    });
}
Animetion_Arrow_Top.addEventListener('click', function() {
    setTimeout(A_R_T, 200);
});

const Electrolaboratory_How_Works_H2 = document.querySelector(".how_works .h2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1300) {
        Electrolaboratory_How_Works_H2.setAttribute("style","animation: animetion_customers 1.8s;");
    }
});

const Electrolaboratory_How_Works_Сontainer = document.querySelector(".electrolaboratory .how_works .container");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1450) {
        Electrolaboratory_How_Works_Сontainer.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Animetion1_left_right_Final_block = document.querySelector(".leave_request .left");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 1950) {
        Animetion1_left_right_Final_block.setAttribute("style","animation: animetion_left-right 1s;")
    }
});
    
const Animetion1_right_left_Final_block = document.querySelector(".leave_request .right");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 2100) {
        Animetion1_right_left_Final_block.setAttribute("style","animation: animetion_right-left 1s;")
    }
});