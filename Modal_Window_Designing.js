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

const Designing_Leave_Request_Right_A = document.querySelector(".designing .leave_request .right .a");
Designing_Leave_Request_Right_A.addEventListener('click', function () {
    Block();
});

const Designing_Leave_Request_Left_Button = document.querySelector(".designing .leave_request .left .button");
Designing_Leave_Request_Left_Button.addEventListener('click', function () {
    const Designing_Leave_Request_Left_H3 = document.querySelector(".designing .leave_request .left .h3");
    Designing_Leave_Request_Left_H3.remove();
    const Designing_Leave_Request_Left_Hr = document.querySelector(".designing .leave_request .left .hr");
    Designing_Leave_Request_Left_Hr.remove();
    const Designing_Leave_Request_Left_Input_2 = document.querySelectorAll(".designing .leave_request .left .input");
    for (const Designing_Leave_Request_Left_Input of Designing_Leave_Request_Left_Input_2){
        Designing_Leave_Request_Left_Input.remove();
    }
    const Designing_Request_Left_Textarea = document.querySelector(".designing .leave_request .left .textarea");
    Designing_Request_Left_Textarea.remove();
    Designing_Leave_Request_Left_Button.remove();

    const Designing_Leave_Request_Left = document.querySelector(".designing .leave_request .left");
    Designing_Leave_Request_Left.className = "Left";
    const Text_Send = document.createElement('p');
    Text_Send.className = "Text_Send";
    Text_Send.innerHTML = "Спасибо за отправку !"
    Designing_Leave_Request_Left.appendChild(Text_Send);
});