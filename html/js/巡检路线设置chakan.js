
var nowPath// 从路线库中选的那条路线

// function chakan(){ //查看路线库中的路线
//     document.getElementById("kuang1").setAttribute("style","display:none");
//     document.getElementById("kuang2").setAttribute("style","display:none");
//     document.getElementById("kuang3").setAttribute("style","display:none");
//     document.getElementById("kuang4").setAttribute("style","display:block");
//     document.getElementById("kuang5").setAttribute("style","display:block");
//     document.getElementById("fanhui").setAttribute("style","display:block");    
//     document.getElementById("tijiao").setAttribute("style","display:none");  
    
    






// }


function lxk_click(x){ //路线的点选效果+切换objMap
    var lxku=document.getElementById("luxianku").getElementsByTagName("li");
    console.log(lxku)
    for(var i=0;i<lxku.length;i++){
        lxku[i].setAttribute('style',"background-color:transparent ;transform: translateY(0px);")
    }
    x.setAttribute('style',"background-color: rgba(47, 159, 200, 1);transform: translateY(1px);")
    objMap=pathLibrary[x.getAttribute("data-id")]
}



