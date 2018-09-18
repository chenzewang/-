
var nowPath// 从路线库中选的那条路线




function lxk_click(x){ //路线的点选效果+切换objMap
    var lxku=document.getElementById("luxianku").getElementsByTagName("li");
    for(var i=0;i<lxku.length;i++){
        lxku[i].setAttribute('style',"background-color:transparent ;")
    }
    x.setAttribute('style',"background-color: rgba(47, 159, 200, 1);")
    objMap=pathLibrary[x.getAttribute("data-id")]
}



