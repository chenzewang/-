function liClick(x){
    for(var i=0;i<10;i++){
        document.getElementById('menu').getElementsByTagName("li")[i].classList.remove("looking");           
        }
    x.classList.add("looking");
}

function addEvent(){
    for(var i=0;i<10;i++){
        document.getElementById('menu').getElementsByTagName("li")[i].setAttribute('onclick','liClick(this)')

    }
}
addEvent();