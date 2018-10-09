


var obj=[
    {
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
    },
]

function creatMap(ob){  //生成路线框图
   
    var lie=6;    
    var hang=ob.length;  
    var tab=`<table id=\"map\"> 
                <thead><tr><th>NFC编号</th> <th>巡检区域名称</th> <th>标签类型</th> <th>状态</th> <th>位置坐标</th> <th>描述</th></tr></thead>
            `
    for(var i=0;i<hang;i++)   
    {
        tab+="<tr>";
                tab+=`<td>${ob[i].num}</td>`;
                tab+=`<td>${ob[i].place}</td>`;
                tab+=`<td>${ob[i].tag}</td>`;
                tab+=`<td>${ob[i].statu}</td>`;
                tab+=`<td>${ob[i].xy}</td>`;
                tab+=`<td>${ob[i].describe}</td>`;
        tab+="</tr>";
    }           
    tab+="</table>"
    document.getElementById("graph1").innerHTML=tab;
}
creatMap(obj);

