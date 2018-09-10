
var nowPath// 从路线库中选的那条路线

function chakan(){ //查看路线库中的路线
    document.getElementById("kuang1").setAttribute("style","display:none");
    document.getElementById("kuang2").setAttribute("style","display:none");
    document.getElementById("kuang3").setAttribute("style","display:none");
    document.getElementById("kuang4").setAttribute("style","display:block");
    document.getElementById("kuang5").setAttribute("style","display:block");
    document.getElementById("fanhui").setAttribute("style","display:block");    
    document.getElementById("tijiao").setAttribute("style","display:none");  
    
    






}


function lxk_click(x){ //路线的点选效果+切换objMap
    var lxku=document.getElementById("luxianku").getElementsByTagName("li");
    console.log(lxku)
    for(var i=0;i<lxku.length;i++){
        lxku[i].setAttribute('style',"background-color:transparent ;transform: translateY(0px);")
    }
    x.setAttribute('style',"background-color: rgba(47, 159, 200, 1);transform: translateY(1px);")
    objMap=pathLibrary[x.getAttribute("data-id")]
}





// function creatMap2(path){  //生成路线框图
    
//     num=path.spots.length //框图数目

//     var lie;    if(num>=5) lie=5;else lie=num;
//     var hang;   hang=Math.ceil(num/5);
//     var tab="<table id=\"map\"> "
    
    
    
//     // for(let i=0;i<objMap.num;i++){
//     //     let objSpot={
//     //     "id": 1,
//     //     "name": "",
//     //     "desc": "",
//     //     "tmp": false,
//     //     "created_at": "",
//     //     "updated_at": "",
//     //     "items": []
//     //     }
//     //     objMap.spots.push(objSpot)
//     // }





//     for(var i=1;i<=hang;i++)
//     {
//         tab+="<tr>";

//         if(i==hang&&num%5!=0){  //最后一行框数    
//             lie=num%5;
//             }
//         for(var j=1;j<=lie;j++)
//         {
//             tab+="<td><div onclick=\"up(this)\" ><span></span><img class=\"jiantou\"></div></td>";
//         }
//         tab+="</tr>";
//     }           
//     tab+="</table>"
//     document.getElementById("kuang4").innerHTML=tab;

//     for(var h=0;h<num;h++){
//         if(Math.ceil((h+1)/5) %2 !=0 ){//奇数行左浮动，偶数行右浮动
//             document.getElementById("map").getElementsByTagName("td")[h].setAttribute('style','float:left');
//         }
//         else{
//             document.getElementById("map").getElementsByTagName("td")[h].setAttribute('style','float:right');
//         }
//     }
//     for(let h=0;h<document.getElementById("map").getElementsByTagName("div").length;h++){
//         document.getElementById("map").getElementsByTagName("div")[h].setAttribute("data-spot-seq",h)//为框图添加序号
//     }



//     jiantou(num);
// }

// function jiantou(num){  //为路线框图添加箭头
//     for(var i=0;i<num;i++){
//         if(Math.ceil((i+1)/5)%2!=0 && i%10!=4 && i%10!=9){ //奇数行
//             document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou.png")
//         }
//         else if(Math.ceil((i+1)/5)%2==0 && i%10!=4 && i%10!=9 ){//偶数行
//             document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou2.png")
//             document.getElementsByClassName("jiantou")[i].setAttribute("style","left:-77px;top:-25px")
//         }  
//         else if(i%10==4 || i%10==9){//指向下一行的交接箭头
//             document.getElementsByClassName("jiantou")[i].setAttribute("src","../img/2-2-jiantou5.png")
//             document.getElementsByClassName("jiantou")[i].setAttribute("style","left:0px;top:0px")
//         }   
//     }
//     document.getElementsByClassName("jiantou")[num-1].setAttribute("src","");

// }

// creatMap2()
