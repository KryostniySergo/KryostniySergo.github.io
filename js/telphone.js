function addNum(){
    document.getElementById("phone").value = "+7"
}
const formatToPhone = (event) => {
    try{
        let numberObj1 = libphonenumber.parsePhoneNumber(event.target.value, 'RU')
        event.target.value = numberObj1.number
    }catch (e){

    }
};

function func(){
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value

    if(name === "" || name === " "){
        alert("Вы не ввели имя")
        return
    }

    if(phone.length < 10){
        alert("Вы ввели номер неправильно")
        return
    }

    let data = JSON.stringify({name: name, phone: phone});
    let request = new XMLHttpRequest();

     request.open("POST", "/sendMail", true);   
     request.setRequestHeader("Content-Type", "application/json");
     request.addEventListener("load", function () {
         let received = JSON.parse(request.response);
         if(received === "ok"){
            alert("Сообщение было доставлено!")
         }else{
            alert("Что то пошло не так и сообщение не было доставлено, попробуйте позвонить по номеру указанному на странице")
         }
     });
     request.send(data);
}

const inputElement = document.getElementsByClassName('phone');
for (let index = 0; index < inputElement.length; index++) {
    inputElement[index].addEventListener('keyup',formatToPhone);
}