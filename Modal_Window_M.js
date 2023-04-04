const Main_Background_A_A = document.querySelector(".main .background .a .a");
const Body = document.querySelector("body");

function Block() {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });
    
    const Container_Text = document.createElement('div');
    Container_Text.className = "Container_Text";
    Madal_Container.appendChild(Container_Text);
    
    const Modal_H2 = document.createElement('div');
    Modal_H2.className = "Modal_H2";
    Container_Text.appendChild(Modal_H2);
    Modal_H2.innerText = "Оставьте заявку";

    const Modal_Hr = document.createElement('div');
    Modal_Hr.className = "Modal_Hr";
    Container_Text.appendChild(Modal_Hr);

    const Modal_Input_1 = document.createElement('input');
    Modal_Input_1.className = "Modal_Input";
    Modal_Input_1.type = "text";
    Modal_Input_1.placeholder = "Имя";
    Modal_Input_1.maxLength = "20";
    Modal_Input_1.autocomplete = "on"
    Modal_Input_1.required = "a"
    Container_Text.appendChild(Modal_Input_1);

    const Modal_Input_2 = document.createElement('input');
    Modal_Input_2.className = "Modal_Input";
    Modal_Input_2.type = "tel";
    Modal_Input_2.placeholder = "Телефон";
    Modal_Input_2.maxLength = "20";
    Modal_Input_2.autocomplete = "on"
    Modal_Input_2.required = "a"
    Container_Text.appendChild(Modal_Input_2);

    const Modal_Input_3 = document.createElement('input');
    Modal_Input_3.className = "Modal_Input";
    Modal_Input_3.type = "email";
    Modal_Input_3.placeholder = "E-mail";
    Modal_Input_3.maxLength = "20";
    Modal_Input_3.autocomplete = "on"
    Modal_Input_3.required = "a"
    Container_Text.appendChild(Modal_Input_3);

    const Textarea = document.createElement('textarea');
    Textarea.className = "Textarea";
    Textarea.placeholder = "Задайте свой вопрос";
    Textarea.maxLength = "1100";
    Textarea.minLength = "10";
    Container_Text.appendChild(Textarea);

    const Container_Text_A = document.createElement('a');
    Container_Text_A.className = "A";
    Container_Text_A.href = "#";
    Container_Text_A.innerText = "Отправить";
    Container_Text.appendChild(Container_Text_A);

    Container_Text_A.addEventListener('click', function () {
        Modal_H2.remove();
        Modal_Hr.remove();
        Modal_Input_1.remove();
        Modal_Input_2.remove();
        Modal_Input_3.remove();
        Textarea.remove();
        Container_Text_A.remove();

        const Text_Send = document.createElement('p');
        Text_Send.className = "Text_Send";
        Text_Send.innerHTML = "Спасибо за отправку !"
        Container_Text.appendChild(Text_Send);

        Container_Text.setAttribute("style","background-image: url('img/Sky.png');");
    });

    Body.setAttribute("style","overflow: hidden;");
}

Main_Background_A_A.addEventListener('click', function () {
    Block();
});

function M_Mounting(){
        document.location.href = "Mounting.html";
    }
const Main_Services_Services_Sext_A_Mounting_1 = document.querySelector(".main .services .services_text .a1 .a");
const Main_Services_Services_Sext_A_Mounting_2 = document.querySelector(".main .services .services_text .a1 .a1");
Main_Services_Services_Sext_A_Mounting_1.addEventListener('click', function () {
    setTimeout(M_Mounting, 400);
});
Main_Services_Services_Sext_A_Mounting_2.addEventListener('click', function () {
    setTimeout(M_Mounting,400);
});

function M_Designing(){
    document.location.href = "Designing.html";
}
const Main_Services_Services_Sext_A_Designing_1 = document.querySelector(".main .services .services_text .a2 .a");
const Main_Services_Services_Sext_A_Designing_2 = document.querySelector(".main .services .services_text .a2 .a2");
Main_Services_Services_Sext_A_Designing_1.addEventListener('click', function () {
setTimeout(M_Designing, 400);
});
Main_Services_Services_Sext_A_Designing_2.addEventListener('click', function () {
setTimeout(M_Designing,400);
});

function M_E(){
    document.location.href = "Electrolaboratory.html";
}
const Main_Services_Services_Sext_A_Electrolaboratory_1 = document.querySelector(".main .services .services_text .a3 .a");
const Main_Services_Services_Sext_A_Electrolaboratory_2 = document.querySelector(".main .services .services_text .a3 .a3");
Main_Services_Services_Sext_A_Electrolaboratory_1.addEventListener('click', function () {
setTimeout(M_E, 400);
});
Main_Services_Services_Sext_A_Electrolaboratory_2.addEventListener('click', function () {
setTimeout(M_E,400);
});

const Main_Img_1 = document.getElementById("Img_1");
Main_Img_1.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_1_Img_1.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_2 = document.getElementById("Img_2");
Main_Img_2.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_1_Img_2.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_3 = document.getElementById("Img_3");
Main_Img_3.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_1_Img_3.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_4 = document.getElementById("Img_4");
Main_Img_4.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_1_Img_4.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_5 = document.getElementById("Img_5");
Main_Img_5.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_2_Img_1.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_6 = document.getElementById("Img_6");
Main_Img_6.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_2_Img_2.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_7 = document.getElementById("Img_7");
Main_Img_7.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_2_Img_3.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_8 = document.getElementById("Img_8");
Main_Img_8.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_2_Img_4.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_9 = document.getElementById("Img_9");
Main_Img_9.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_3_Img_1.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_10 = document.getElementById("Img_10");
Main_Img_10.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_3_Img_2.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_11 = document.getElementById("Img_11");
Main_Img_11.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_3_Img_3.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_12 = document.getElementById("Img_12");
Main_Img_12.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_3_Img_4.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_13 = document.getElementById("Img_13");
Main_Img_13.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_4_Img_1.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_14 = document.getElementById("Img_14");
Main_Img_14.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_4_Img_2.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_15 = document.getElementById("Img_15");
Main_Img_15.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_4_Img_3.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Img_16 = document.getElementById("Img_16");
Main_Img_16.addEventListener('click', function () {
    const Madal_Container = document.createElement('div');
    Madal_Container.className = "Madal_Container";
    document.body.appendChild(Madal_Container);
    Body.setAttribute("style","overflow: hidden;");

    const Black_Modal_Window = document.createElement('div');
    Black_Modal_Window.className = "Black_Modal_Window";
    Madal_Container.appendChild(Black_Modal_Window);
    Black_Modal_Window.addEventListener('click', function () {
        Madal_Container.remove();
        Body.setAttribute("style","overflow: auto;");
    });

    const Img_1 = document.createElement('img');
    Img_1.className = "Img";
    Img_1.src = "img/Opening_Photos_4_Img_4.png";
    Madal_Container.appendChild(Img_1);
});

const Main_Leave_Request_Left_Button = document.querySelector(".main .leave_request .left .button");
Main_Leave_Request_Left_Button.addEventListener('click', function () {
    const Main_Leave_Request_Left_H3 = document.querySelector(".main .leave_request .left .h3");
    Main_Leave_Request_Left_H3.remove();
    const Main_Leave_Request_Left_Hr = document.querySelector(".main .leave_request .left .hr");
    Main_Leave_Request_Left_Hr.remove();
    const Main_Leave_Request_Left_Input_2 = document.querySelectorAll(".main .leave_request .left .input");
    for (const Main_Leave_Request_Left_Input of Main_Leave_Request_Left_Input_2){
        Main_Leave_Request_Left_Input.remove();
    }
    const Main_Leave_Request_Left_Textarea = document.querySelector(".main .leave_request .left .textarea");
    Main_Leave_Request_Left_Textarea.remove();
    Main_Leave_Request_Left_Button.remove();

    const Main_Leave_Request_Left = document.querySelector(".main .leave_request .left");
    Main_Leave_Request_Left.className = "Left";
    const Text_Send = document.createElement('p');
    Text_Send.className = "Text_Send";
    Text_Send.innerHTML = "Спасибо за отправку !"
    Main_Leave_Request_Left.appendChild(Text_Send);
});

const Main_Leave_Request_Right_A = document.querySelector(".main .leave_request .right .a");
Main_Leave_Request_Right_A.addEventListener('click', function () {
    Block();
});