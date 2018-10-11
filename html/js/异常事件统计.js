


var obj=[{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
    xxx:"aaaa"
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",    xxx:"aaaa"
    
}]


function creatMap(ob){  //生成路线框图
   
    var lie=4;    
    var hang=ob.length;  
    var tab=`<table id=\"map\"> 
            <thead><tr><th>序号</th> <th>时间</th> <th>事件</th> <th>路线</th><th>巡检人</th><th>查看</th></tr></thead>
        `
    for(var i=0;i<hang;i++)   
    {
        tab+="<tr>";
                tab+=`<td>${ob[i].num}</td>`;
                tab+=`<td>${ob[i].event}</td>`;
                tab+=`<td>${ob[i].map}</td>`;
                tab+=`<td>${ob[i].man}</td>`;
                tab+=`<td>${ob[i].xxx}</td>`;
                tab+=`<td><button> 查看</button></td>`;
        tab+="</tr>";
    }           
    tab+="</table>"
    document.getElementById("graph1").innerHTML=tab;
}
creatMap(obj);


