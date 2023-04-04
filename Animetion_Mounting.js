const menu_items_mane = document.querySelector(".mounting .menu_items_mane");
const menu_items_services = document.querySelector(".mounting .menu_items_services");
const menu_items_phone_call = document.querySelector(".mounting .menu_items_phone_call");
const menu_items_electrolaboratory = document.querySelector(".mounting .menu_items_electrolaboratory");
const menu_items_designing = document.querySelector(".mounting .menu_items_designing");

function E_M(){
    document.location.href = "index.html";
}
menu_items_mane.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

menu_items_services.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

const Menu_items_electrolaboratory = document.querySelector(".menu_items_electrolaboratory");
function M_E(){
    document.location.href = "Electrolaboratory.html";
}
Menu_items_electrolaboratory.addEventListener('click', function () {
    setTimeout(M_E, 400);
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

const Mounting_Animetion_1_left = document.querySelector(".works .Animetion_1 .left");
const Mounting_Animetion_1_right = document.querySelector(".works .Animetion_1 .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 100) {
        Mounting_Animetion_1_left.setAttribute("style","animation: animetion_left-right 1s;");
        Mounting_Animetion_1_right.setAttribute("style","animation: animetion_right-left 1s;");
    }
});

const Mounting_Animetion_2_left = document.querySelector(".works .Animetion_2 .left");
const Mounting_Animetion_2_right = document.querySelector(".works .Animetion_2 .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 500) {
        Mounting_Animetion_2_left.setAttribute("style","animation: animetion_left-right 1s;");
        Mounting_Animetion_2_right.setAttribute("style","animation: animetion_right-left 1s;");
    }
});

const Mounting_Animetion_3_left = document.querySelector(".works .Animetion_3 .left");
const Mounting_Animetion_3_right = document.querySelector(".works .Animetion_3 .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 900) {
        Mounting_Animetion_3_left.setAttribute("style","animation: animetion_left-right 1s;");
        Mounting_Animetion_3_right.setAttribute("style","animation: animetion_right-left 1s;");
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

const Mounting_Animetion_4_left = document.querySelector(".works .Animetion_4 .left");
const Mounting_Animetion_4_right = document.querySelector(".works .Animetion_4 .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 1300) {
        Mounting_Animetion_4_left.setAttribute("style","animation: animetion_left-right 1s;");
        Mounting_Animetion_4_right.setAttribute("style","animation: animetion_right-left 1s;");
    }
});

const Mounting_Animetion_5_left = document.querySelector(".works .Animetion_5 .left");
const Mounting_Animetion_5_right = document.querySelector(".works .Animetion_5 .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 1700) {
        Mounting_Animetion_5_left.setAttribute("style","animation: animetion_left-right 1s;");
        Mounting_Animetion_5_right.setAttribute("style","animation: animetion_right-left 1s;");
    }
});

const Mounting_Animetion_6_left = document.querySelector(".works .Animetion_6 .left");
const Mounting_Animetion_6_right = document.querySelector(".works .Animetion_6 .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 2100) {
        Mounting_Animetion_6_left.setAttribute("style","animation: animetion_left-right 1s;");
        Mounting_Animetion_6_right.setAttribute("style","animation: animetion_right-left 1s;");
    }
});

const Mounting_Leave_Request_Left = document.querySelector(".leave_request .left");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 2650) {
        Mounting_Leave_Request_Left.setAttribute("style","animation: animetion_left-right 1s;");
    }
});

const Mounting_Leave_Request_Right = document.querySelector(".leave_request .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 2750) {
        Mounting_Leave_Request_Right.setAttribute("style","animation: animetion_right-left 1s;");
    }
});