function freestaff_func(){
    let freestaff = document.getElementsByClassName("get_free_staff");

    for (let index = 0; index < freestaff.length; index++) {
        const element = freestaff[index];

        switch (element.name) {
            case "org_name":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели название организации")
                    return;
                }
                break;
            case "name":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели имя")
                    return;
                }
                break;
            case "email":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели почту")
                    return;
                }
                break;
            case "phone":
                if(element.value.length < 10){
                    alert("Вы не ввели номер")
                    return;
                }
                break;
            case "adress":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели адрес")
                    return;
                }
                break;
            default:
                break;
        }
    }
}

function buySome_func(){

    let buySome = document.getElementsByClassName("buySomeProduct");

    for (let index = 0; index < buySome.length; index++) {
        const element = buySome[index];

        switch (element.name) {
            case "org_name":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели название организации")
                    return;
                }
                break;
            case "name":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели имя")
                    return;
                }
                break;
            case "email":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели почту")
                    return;
                }
                break;
            case "phone":
                if(element.value.length < 10){
                    alert("Вы не ввели номер")
                    return;
                }
                break;
            default:
                break;
        }
    }
}

// function func(){
//     let name = document.getElementById("name").value
//     let phone = document.getElementById("phone").value

//     if(name === "" || name === " "){
//         alert("Вы не ввели имя")
//         return
//     }

//     if(phone.length < 10){
//         alert("Вы ввели номер неправильно")
//         return
//     }

//     let data = JSON.stringify({name: name, phone: phone});
//     let request = new XMLHttpRequest();

//      request.open("POST", "/sendMail", true);   
//      request.setRequestHeader("Content-Type", "application/json");
//      request.addEventListener("load", function () {
//          let received = JSON.parse(request.response);
//          if(received === "ok"){
//             alert("Сообщение было доставлено!")
//          }else{
//             alert("Что то пошло не так и сообщение не было доставлено, попробуйте позвонить по номеру указанному на странице")
//          }
//      });
//      request.send(data);
// }

function last_question(){
    let any_question = document.getElementsByClassName("any_question_item");

    for (let index = 0; index < any_question.length-1; index++) {
        const element = any_question[index];
        switch (element.name) {
            case "org_name":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели название организации")
                    return;
                }
                break;
            case "name":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели имя")
                    return;
                }
                break;
            case "phone":
                if(element.value.length < 10){
                    alert("Вы не ввели номер")
                    return;
                }
                break;
            case "just_text":
                if(element.value === "" || element.value === " ") {
                    alert("Вы не ввели ваш вопрос")
                    return;
                }
                break;
            default:
                break;
        }
    }
}

$(".phone").mask("+7 (999) 999-99-99");