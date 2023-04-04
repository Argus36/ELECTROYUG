const Scroll_Pos = window.scrollY;

const Animetion_i = document.querySelectorAll(".main .services .img");
for(const Animetion_Img of Animetion_i){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 100){
            Animetion_Img.setAttribute("style","opacity:1;");
        }
    });
}
    
const Animetion_i_2 = document.querySelectorAll(".main .customers .img");
const Div = document.querySelector(".customers");
for (const Animetion_Img_2 of Animetion_i_2){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 700){
            Animetion_Img_2.setAttribute("style","opacity:1;");
            Div.setAttribute("style","animation: animetion_customers 1.5s;")
        }
    });
}
    
const h2_Animetion = document.querySelector(".main .care .h2");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 1150){
        h2_Animetion.setAttribute("style","animation: animetion_customers 1.8s;")
    }
});
    
const Animetion_P = document.querySelectorAll(".main .care .right .animetion_care_1");
for (const Animetion_p of Animetion_P){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 1250){
            Animetion_p.setAttribute("style","animation: animetion_customers 1.8s;")
        }
    });
}
    
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
    
const Animetion_P_2 = document.querySelectorAll(".main .care .animetion_care_2");
for (const Animetion_p_2 of Animetion_P_2){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 1600){
            Animetion_p_2.setAttribute("style","animation: animetion_customers 1.8s;")
        }
    });
}
    
const h2_Animetion_2 = document.querySelector(".main .completed_projects_1 .h2");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 1950){
        h2_Animetion_2.setAttribute("style","animation: animetion_customers 1.8s;")
    }
});
    
const Animetion_backgraund_1 = document.querySelector(".main .completed_projects_1 .left .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 2150){
        Animetion_backgraund_1.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_backgraund_2 = document.querySelector(".main .completed_projects_1 .right .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 2300){
        Animetion_backgraund_2.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_P_3 = document.querySelectorAll(".main .completed_projects_1 .animetion_completed_projects");
for (const Animetion_p_3 of Animetion_P_3){
    window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 2520){
            Animetion_p_3.setAttribute("style","animation: animetion_customers 1.8s;")
        }
    });
}
    
const Animetion1_left_right_1 = document.querySelectorAll(".main .opening_photos_1 .animetion_left-right");
for (const Animetion_left_right_1 of Animetion1_left_right_1){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 3000){
            Animetion_left_right_1.setAttribute("style","animation: animetion_left-right 1s;");
        }
    });
}
    
const Animetion2_right_left_1 = document.querySelectorAll(".main .opening_photos_1 .animetion_right-left");
for (const Animetion_right_left_1 of Animetion2_right_left_1){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 3000){
            Animetion_right_left_1.setAttribute("style","animation: animetion_right-left 1s;");
        }
    });
}
    
const Animetion_backgraund_3 = document.querySelector(".main .completed_projects_2 .left .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 3250){
        Animetion_backgraund_3.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_backgraund_4 = document.querySelector(".main .completed_projects_2 .right .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 3450){
        Animetion_backgraund_4.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_P_4 = document.querySelectorAll(".main .completed_projects_2 .animetion_completed_projects");
for (const Animetion_p_4 of Animetion_P_4){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 3700){
            Animetion_p_4.setAttribute("style","animation: animetion_customers 1.8s;")
        }
    });
}
    
const Animetion1_left_right_2 = document.querySelectorAll(".main .opening_photos_2 .animetion_left-right");
for (const Animetion_left_right_2 of Animetion1_left_right_2){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 4150){
            Animetion_left_right_2.setAttribute("style","animation: animetion_left-right 1s;");
        }
    });
}
    
const Animetion2_right_left_2 = document.querySelectorAll(".main .opening_photos_2 .animetion_right-left");
for (const Animetion_right_left_2 of Animetion2_right_left_2){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 4150){
            Animetion_right_left_2.setAttribute("style","animation: animetion_right-left 1s;");
        }
    });
}
    
const Animetion_backgraund_5 = document.querySelector(".main .completed_projects_3 .left .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 4400){
        Animetion_backgraund_5.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_backgraund_6 = document.querySelector(".main .completed_projects_3 .right .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 4600){
        Animetion_backgraund_6.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_P_5 = document.querySelectorAll(".main .completed_projects_3 .animetion_completed_projects");
for (const Animetion_p_5 of Animetion_P_5){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 4900){
            Animetion_p_5.setAttribute("style","animation: animetion_customers 1.8s;")
        }
    });
}
    
const Animetion1_left_right_3 = document.querySelectorAll(".main .opening_photos_3 .animetion_left-right");
for (const Animetion_left_right_3 of Animetion1_left_right_3){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 5350){
            Animetion_left_right_3.setAttribute("style","animation: animetion_left-right 1s;");
        }
    });
}
    
const Animetion2_right_left_3 = document.querySelectorAll(".main .opening_photos_3 .animetion_right-left");
for (const Animetion_right_left_3 of Animetion2_right_left_3){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 5350){
            Animetion_right_left_3.setAttribute("style","animation: animetion_right-left 1s;");
        }
    });
}
    
const Animetion_backgraund_7 = document.querySelector(".main .completed_projects_4 .left .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 5700){
        Animetion_backgraund_7.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_backgraund_8 = document.querySelector(".main .completed_projects_4 .right .backgraund");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 5800){
        Animetion_backgraund_8.setAttribute("style","opacity: 1;");
    }
});
    
const Animetion_P_6 = document.querySelectorAll(".main .completed_projects_4 .animetion_completed_projects");
for (const Animetion_p_6 of Animetion_P_6){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 6000){
            Animetion_p_6.setAttribute("style","animation: animetion_customers 1.8s;")
        }
    });
}
    
const Animetion1_left_right_4 = document.querySelectorAll(".main .opening_photos_4 .animetion_left-right");
for (const Animetion_left_right_4 of Animetion1_left_right_4){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 6500){
            Animetion_left_right_4.setAttribute("style","animation: animetion_left-right 1s;");
        }
    });
}
    
const Animetion2_right_left_4 = document.querySelectorAll(".main .opening_photos_4 .animetion_right-left");
for (const Animetion_right_left_4 of Animetion2_right_left_4){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 6500){
            Animetion_right_left_4.setAttribute("style","animation: animetion_right-left 1s;");
        }
    });
}
    
const Animetion_Location_Img1 = document.querySelectorAll(".main .location .img");
for (const Animetion_Location_Img of Animetion_Location_Img1){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 6900){
            Animetion_Location_Img.setAttribute("style","opacity: 1;")
        }
    });
}
    
const Animetion_Questions_h2 = document.querySelector(".main .questions .h2");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 7650){
        Animetion_Questions_h2.setAttribute("style","animation: animetion_customers 1.8s;")
    }
});
    
const Animetion_Questions1 = document.querySelectorAll(".main .questions .container");
for (const Animetion_Questions of Animetion_Questions1){
    window.addEventListener('scroll', function() {
        const Scroll_Pos = window.scrollY;
        if (Scroll_Pos > 7750){
            Animetion_Questions.setAttribute("style","animation: animetion_customers 1s;")
        }
    });
}
    
    const Animetion_Thank_Letters_h2 = document.querySelector(".main .thank_letters .h2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 8150) {
        Animetion_Thank_Letters_h2.setAttribute("style","animation: animetion_customers 1.8s;");
    }
});
    
const Animetion_phone_call_h2 = document.querySelector(".main .phone_call .h2");
window.addEventListener('scroll', function () {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 8900) {
        Animetion_phone_call_h2.setAttribute("style","animation: animetion_customers 2s;");
    }
});
    
const Animetion1_left_right_Final_block = document.querySelector(".main .leave_request .left");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 9350) {
        Animetion1_left_right_Final_block.setAttribute("style","animation: animetion_left-right 1s;")
    }
});
    
const Animetion1_right_left_Final_block = document.querySelector(".main .leave_request .right");
window.addEventListener('scroll', function() {
    const Scroll_Pos = window.scrollY;
    if (Scroll_Pos > 9450) {
        Animetion1_right_left_Final_block.setAttribute("style","animation: animetion_right-left 1s;")
    }
});

const Menu_items_electrolaboratory = document.querySelector(".menu_items_electrolaboratory");
function M_E(){
    document.location.href = "Electrolaboratory.html";
}
Menu_items_electrolaboratory.addEventListener('click', function () {
    setTimeout(M_E, 400);
});

const Menu_items_mounting = document.querySelector(".menu_items_mounting");
function M_Mounting(){
    document.location.href = "Mounting.html";
}
Menu_items_mounting.addEventListener('click', function () {
    setTimeout(M_Mounting, 400);
});

const Menu_items_designing = document.querySelector(".menu_items_designing");
function M_Designing(){
    document.location.href = "Designing.html";
}
Menu_items_designing.addEventListener('click', function () {
    setTimeout(M_Designing, 400);
});