function addEvent(){
    for(var i=0;i<3;i++){
        document.getElementById("map").getElementsByTagName("li")[i].setAttribute("onclick","liClick(this)")
    }
}
addEvent();
function liClick(x){  //按巡检路线查找的点选效果
    for(var i=0;i<3;i++){
        document.getElementById("map").getElementsByTagName("li")[i].setAttribute("style","color:white");
    }
    x.setAttribute("style","color:orange");

}
function breakMessage(){
    document.getElementById("breakMessage").setAttribute("style","display:block")
}


function searchByOther(){
    var record=document.getElementsByClassName("record")
    for(var i=0;i<record.length;i++){
        record[i].setAttribute("style","display:none")
    }
    console.log("执行了searchByOther()")
    
    document.getElementById("record3").setAttribute("style","display:block")   
}

function searchByEqu(){
    var record=document.getElementsByClassName("record")
    for(var i=0;i<record.length;i++){
        record[i].setAttribute("style","display:none")
    }
    console.log("执行了searchByEqu()")
    document.getElementById("record4").setAttribute("style","display:block")   
}





var obj=[{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},{
    num:"1",
    time:"20180911",
    man:"陈某",
    digest:"还行还行",
    dian:"1",
    statu:"无状态",
    value:"1000000",
    normalValue:"还行",
    breakMessage:"还行",    
    describe:"还行",
    project:"锅炉",
    time1:"20180610",
    time2:"20180612",
},
]


function creatGraph1(ob){  //生成路线框图
    
     var lie=5;    
     var hang=ob.length;  
     var tab=`<table > 
                <thead><tr><th>序号</th> <th>时间</th> <th>巡检人</th> <th>异常摘要</th> <th>操作</th></tr></thead>
              `
     for(var i=0;i<hang;i++)   
     {
         tab+="<tr>";
                 tab+=`<td>${ob[i].num}</td>`;
                 tab+=`<td>${ob[i].time}</td>`;
                 tab+=`<td>${ob[i].man}</td>`;
                 tab+=`<td>${ob[i].digest}</td>`;
                 tab+=`<td><button onclick="chakan1()">查看详情</button></td>`;                 
         tab+="</tr>";
     }           
     tab+="</table>"
     document.getElementById("graph1").innerHTML=tab;
 }
 creatGraph1(obj);

function chakan1(){
 document.getElementById("record1").setAttribute("style","display:none")
 document.getElementById("record2").setAttribute("style","display:block")
}






function creatGraph2(ob){  //生成路线框图
    
     var lie=5;    
     var hang=ob.length;  
     var tab=`<table > 
                <thead><tr><th>送检点</th> <th>状态</th> <th>巡检值</th> <th>标准值</th> <th>故障信息描述</th></tr></thead>              
                `
     for(var i=0;i<hang;i++)   
     {
         tab+="<tr>";
                 tab+=`<td>${ob[i].dian}</td>`;
                 tab+=`<td>${ob[i].statu}</td>`;
                 tab+=`<td>${ob[i].value}</td>`;
                 tab+=`<td>${ob[i].normalValue}</td>`;
                 tab+=`<td>${ob[i].describe}</td>`;                 
         tab+="</tr>";
     }           
     tab+="</table>"
     document.getElementById("graph2").innerHTML=tab;
 }
 creatGraph2(obj);



 function creatGraph3(ob){  //生成路线框图
    
     var lie=5;    
     var hang=ob.length;  
     var tab=`<table > 
                <thead><tr><th>选定的巡检次数</th> <th>巡检人</th> <th>巡检路线</th> <th>巡检时间</th> <th>操作</th></tr></thead>
                `
     for(var i=0;i<hang;i++)   
     {
         tab+="<tr>";
                 tab+=`<td>${ob[i].num}</td>`;
                 tab+=`<td>${ob[i].man}</td>`;
                 tab+=`<td>${ob[i].digest}</td>`;
                 tab+=`<td>${ob[i].time1}</td>`;
                 tab+=`<td><button onclick="chakan1()">查看详情</button></td>`;                 
         tab+="</tr>";
     }           
     tab+="</table>"
     document.getElementById("graph3").innerHTML=tab;
 }
 creatGraph3(obj);




 function creatGraph4(ob){  //生成路线框图
    
     var lie=7;    
     var hang=ob.length;  
     var tab=`<table > 
                <thead><tr><th>序号</th> <th>项目</th> <th>时间1</th> <th>时间2</th> <th>故障信息</th> <th>标准值</th> <th>状态</th></tr></thead>
            `
     for(var i=0;i<hang;i++)   
     {
         tab+="<tr>";
                 tab+=`<td>${ob[i].num}</td>`;
                 tab+=`<td>${ob[i].project}</td>`;
                 tab+=`<td>${ob[i].time1}</td>`;
                 tab+=`<td>${ob[i].time2}</td>`;
                 tab+=`<td><span onclick="chakan4()">${ob[i].breakMessage}</span></td>`;   
                 tab+=`<td>${ob[i].normalValue}</td>`;                 
                 tab+=`<td>${ob[i].statu}</td>`;                 
                              
                 
         tab+="</tr>";
     }           
     tab+="</table>"
     document.getElementById("graph4").innerHTML=tab;
 }
 creatGraph4(obj);

 function chakan4 (){
    document.getElementById("record4").setAttribute("style","display:none")
    document.getElementById("record5").setAttribute("style","display:block")
 }













// var vm=new Vue({
//     el:"#graph1",
//     data:{
//         newRecord:{
//             num:"1",
//             time:"20180610",
//             man:"余某",
//             digest:"还行",
//         },
//         recordLib:[{
//             num:"2",
//             time:"20180611",
//             man:"陈某",
//             digest:"多处破损",
//         },{
//             num:"3",
//             time:"20180612",
//             man:"毛某",
//             digest:"损坏",
//         },{
//             num:"4",
//             time:"20180613",
//             man:"唐某",
//             digest:"完好",
//         },{
//             num:"4",
//             time:"20180613",
//             man:"唐某",
//             digest:"完好",
//         },{
//             num:"4",
//             time:"20180613",
//             man:"唐某",
//             digest:"完好",
//         },{
//             num:"4",
//             time:"20180613",
//             man:"唐某",
//             digest:"完好",
//         },{
//             num:"4",
//             time:"20180613",
//             man:"唐某",
//             digest:"完好",
//         },{
//             num:"4",
//             time:"20180613",
//             man:"唐某",
//             digest:"完好",
//         },{
//             num:"4",
//             time:"20180613",
//             man:"唐某",
//             digest:"完好",
//         }
//         ]
//     },//end data
//     methods:{
        
//         lookDetial:function(index){
//             document.getElementById("record1").setAttribute("style","display:none")
//             document.getElementById("record2").setAttribute("style","display:block")
            
//         },
//     }
// })












// var vm2=new Vue({
//     el:"#graph2",
//     data:{
//         newRecord:{
//             dian:"1",
//             statu:"20180610",
//             value:"余某",
//             normalValue:"还行",
//             describe:"还行",
//         },
//         record2Lib:[{
//             dian:"1",
//             statu:"20180610",
//             value:"余某",
//             normalValue:"还行",
//             describe:"还行",
//         },{
//             dian:"2",
//             statu:"20180610",
//             value:"余某",
//             normalValue:"还行",
//             describe:"还行",
//         },{
//             dian:"3",
//             statu:"20180610",
//             value:"余某",
//             normalValue:"还行",
//             describe:"还行",
//         },{
//             dian:"4",
//             statu:"20180610",
//             value:"余某",
//             normalValue:"还行",
//             describe:"还行",
//         },{
//             dian:"5",
//             statu:"20180610",
//             value:"余某",
//             normalValue:"还行",
//             describe:"还行",
//         },{
//             dian:"6",
//             statu:"20180610",
//             value:"余某",
//             normalValue:"还行",
//             describe:"还行",
//         },
//         ]
//     },//end data
//     methods:{
        
//         lookDetial:function(index){
//             document.getElementById("record3").setAttribute("style","display:none")
//             document.getElementById("record2").setAttribute("style","display:block")
            
//         },
        
//     }
// })


// var vm3=new Vue({
//     el:"#graph3",
//     data:{
//         newRecord:{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },
//         record3Lib:[{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },{
//             num:"1",
//             man:"20180610",
//             map:"余某",
//             time:"还行",
//         },
//         ]
//     },//end data
//     methods:{
        
//         lookDetial:function(index){
//             document.getElementById("record3").setAttribute("style","display:none")
//             document.getElementById("record2").setAttribute("style","display:block")
            
//         },
//     }
// })



    
// var vm3=new Vue({
//     el:"#graph4",
//     data:{
//         newRecord:{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },
//         record4Lib:[{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },{
//             num:"1",
//             project:"锅炉",
//             time1:"20180610",
//             time2:"20180612",
//             breakMessage:"还行",
//             normalValue:"不错",
//             statu:"损坏",
//         },
//         ]
//     },//end data
//     methods:{
        
//         lookBreakMessage:function(index){
//             document.getElementById("record4").setAttribute("style","display:none")
//             document.getElementById("record5").setAttribute("style","display:block")
//         },
//     }
// })




