function initialize(){
    const image = document.querySelector('#image');
    console.log(image)
    const clone = image.cloneNode(true);
    console.log(clone);
    var list = document.body.getElementsByTagName("div");
    console.log(list);
    for (let i = 0; i < list.length; i++){
        console.log(list.item(i));
        list.item(i).appendChild(image);
    }

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

}

function totalPCF(nutrient){
    var x = 0;
    const list = document.getElementsByClassName(nutrient)
    console.log(list)
    for (let y = 0; y < list.length; y++){
        x = x + Number(list[y].getElementsByTagName("span")[0].innerHTML);
    }
    return x;
}


