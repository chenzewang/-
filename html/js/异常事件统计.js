// var vm=new Vue({
//     el:"#graph1",
//     data:{
//         newNfc:{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },
//         storage:[{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },{
//             num:"2",
//             event:"20180611",
//             map:"陈某",
//             man:"多处破损",
//         },
//         ]
//     },//end data
   
    
// })


var obj=[{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
},
{
    num:"2",
    event:"炸了啊",
    map:"电气路线",
    man:"陈某",
}]


function creatMap(ob){  //生成路线框图
   
    var lie=4;    
    var hang=ob.length;  
    var tab=`<table id=\"map\"> 
            <thead><tr><th>序号</th> <th>事件</th> <th>路线</th> <th>巡检人</th></tr></thead>
        `
    for(var i=0;i<hang;i++)   
    {
        tab+="<tr>";
                tab+=`<td>${ob[i].num}</td>`;
                tab+=`<td>${ob[i].event}</td>`;
                tab+=`<td>${ob[i].map}</td>`;
                tab+=`<td>${ob[i].man}</td>`;
        tab+="</tr>";
    }           
    tab+="</table>"
    document.getElementById("graph1").innerHTML=tab;
}
creatMap(obj);


