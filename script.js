function initialize(){
    const clone = document.getElementById("image");
    var list = document.body.getElementsByClassName("Main");
    for (let i = 0; i < list.length; i++){
        list.item(i).innerHTML+=clone.innerHTML;
    }
    clone.remove();
}

function subtract(){
    var x = window.event.srcElement.parentElement.getElementsByTagName('span')[0];
    var num = Number(x.innerHTML);
    num = num - 1;
    if (num < 0){
        num = 0;
    }
    x.innerHTML = num;

    display()
}

function add(){
    var x = window.event.srcElement.parentElement.getElementsByTagName('span')[0];
    var num = Number(x.innerHTML);
    num = num + 1;
    x.innerHTML = num;

    display()
}

function display(){
    var appetizerCalorie = getCalorie("Appetizer");
    var entreeCalorie = getCalorie("Entree");
    var desertCalorie = getCalorie("Desert");
    document.getElementById("Appetizer Calorie").innerHTML = appetizerCalorie;
    document.getElementById("Entree Calorie").innerHTML = entreeCalorie;
    document.getElementById("Desert Calorie").innerHTML = desertCalorie;
    document.getElementById("Total Calorie").innerHTML = appetizerCalorie + entreeCalorie + desertCalorie;
}

function getCalorie(ID){
    const list = document.getElementById(ID);
    var Protein = list.getElementsByClassName("Protein")[0].getElementsByTagName("span")[0].innerHTML;
    var Carb = list.getElementsByClassName("Carb")[0].getElementsByTagName("span")[0].innerHTML;
    var Fat = list.getElementsByClassName("Fat")[0].getElementsByTagName("span")[0].innerHTML;
    return (Protein*4)+(Carb*4)+(Fat*9);
}


