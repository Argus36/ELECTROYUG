const menu_items_mane = document.querySelector(".designing .menu_items_mane");
const menu_items_services = document.querySelector(".designing .menu_items_services");
const menu_items_phone_call = document.querySelector(".designing .menu_items_phone_call");
const menu_items_electrolaboratory = document.querySelector(".designing .menu_items_electrolaboratory");
const menu_items_mounting = document.querySelector(".designing .menu_items_mounting");

function E_M(){
    document.location.href = "index.html";
}
menu_items_mane.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

menu_items_services.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

function M_E(){
    document.location.href = "Electrolaboratory.html";
}
menu_items_electrolaboratory.addEventListener('click', function () {
    setTimeout(M_E, 400);
});

function E_Designing() {
    document.location.href = "Mounting.html";
}
menu_items_mounting.addEventListener('click', function () {
    setTimeout(E_Designing,400);
});

menu_items_phone_call.addEventListener('click', function () {
    setTimeout(E_M, 400);
});

const Mounting_Integrated_Design1 = document.querySelectorAll(".integrated_design .p");
for (const Mounting_Integrated_Design of Mounting_Integrated_Design1) {
    window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    console.log(Scroll_Pos);
    if(Scroll_Pos > 80) {
        Mounting_Integrated_Design.setAttribute("style","animation: animetion_customers 1s;");
    }
});
}

const Mounting_Integrated_Design_Button = document.querySelector(".integrated_design .button");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 180) {
        Mounting_Integrated_Design_Button.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Mounting_Integrated_Design_Img = document.querySelector(".integrated_design .img .img");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 250) {
        Mounting_Integrated_Design_Img.setAttribute("style","opacity: 1;");
    }
});

const Mounting_Stages_Power_H2 = document.querySelector(".stages_power .h2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 750) {
        Mounting_Stages_Power_H2.setAttribute("style","animation: animetion_customers 1.5s;");
    }
});

const Mounting_Stages_Power_P = document.querySelector(".stages_power .p");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 900) {
        Mounting_Stages_Power_P.setAttribute("style","animation: animetion_customers 1s;");
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

const Mounting_Stages_Power_H3_2 = document.querySelector(".stages_power .h3_2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1300) {
        Mounting_Stages_Power_H3_2.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Mounting_Stages_Power_P_2 = document.querySelector(".stages_power .p_2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1350) {
        Mounting_Stages_Power_P_2.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Mounting_Stages_Power_H3_3 = document.querySelector(".stages_power .h3_3");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1500) {
        Mounting_Stages_Power_H3_3.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Mounting_Stages_Power_P_3 = document.querySelector(".stages_power .p_3");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1550) {
        Mounting_Stages_Power_P_3.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Mounting_Structure_Project_H2 = document.querySelector(".structure_project .h2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1700) {
        Mounting_Structure_Project_H2.setAttribute("style","animation: animetion_customers 1.5s;");
    }
});

const Mounting_Structure_Project_Container = document.querySelector(".structure_project .container");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 1900) {
        Mounting_Structure_Project_Container.setAttribute("style","animation: Left_Right 1s;");
    }
});

const Mounting_Project_Cost_H2 = document.querySelector(".project_cost .h2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 2550) {
        Mounting_Project_Cost_H2.setAttribute("style","animation: animetion_customers 1.5s;");
    }
});

const Mounting_Project_Cost_Left_Top = document.querySelector(".project_cost .left .top");
const Mounting_Project_Cost_Right_Top = document.querySelector(".project_cost .right .top");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 2750) {
        Mounting_Project_Cost_Left_Top.setAttribute("style","animation: animetion_customers 1s;");
        Mounting_Project_Cost_Right_Top.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Mounting_Project_Cost_Left_Bottom = document.querySelector(".project_cost .left .bottom");
const Mounting_Project_Cost_Right_Bottom = document.querySelector(".project_cost .right .bottom");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 3050) {
        Mounting_Project_Cost_Left_Bottom.setAttribute("style","animation: animetion_customers 1s;");
        Mounting_Project_Cost_Right_Bottom.setAttribute("style","animation: animetion_customers 1s;");
    }
});

const Mounting_Project_Cost_P_1 = document.querySelector(".project_cost .p1");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 3350) {
        Mounting_Project_Cost_P_1.setAttribute("style","animation: animetion_customers 1.5s;");
    }
});

const Mounting_leave_request_Left = document.querySelector(".leave_request .left");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 3600) {
        Mounting_leave_request_Left.setAttribute("style","animation: animetion_left-right 1s;");
    }
});

const Mounting_leave_request_Right = document.querySelector(".leave_request .right");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if(Scroll_Pos > 3700) {
        Mounting_leave_request_Right.setAttribute("style","animation: animetion_right-left 1s;");
    }
});