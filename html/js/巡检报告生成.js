

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


