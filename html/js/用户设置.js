document.getElementById("add").onclick=function(){
    document.getElementById("add_div").setAttribute("style","display:block")
}

document.getElementsByClassName("pop-close")[0].onclick=function(){
    document.getElementById("add_div").setAttribute("style","display:none")
}

function chakan(){
 document.getElementById("background").setAttribute("style","display:none")
 document.getElementById("record").setAttribute("style","display:block")
}

var obj=[
    {
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:false,
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:false,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:true,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:true,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:true,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:true,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:true,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏", 
        active:true,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:true,
        
    },{
        num:"2",
        place:"20180611",
        tag:"陈某",
        statu:"多处破损",
        xy:"(12,54)",
        describe:"看起来还行应该没坏",  
        active:true,
        
    },
]

function creatMap(ob){  //生成路线框图
   
    var lie=6;    
    var hang=ob.length;  
    var tab=`<table id=\"map\"> 
                <thead><tr><th>姓名</th> <th>工号</th> <th>专业</th> <th>权限</th> <th>密码</th><th>照片</th> </tr></thead>
            `
        for(let i=0;i<hang;i++){
            tab+=`<tr>`;
                tab+=`<td>${ob[i].num}</td>`;
                tab+=`<td>${ob[i].place}</td>`;
                tab+=`<td>${ob[i].statu}</td>`;
                tab+=`<td>${ob[i].active}</td>`;
                tab+=`<td>${ob[i].describe}</td>`;
                tab+=`<td><button>查看</button><button>删除</button></td>`;
                
                tab+=`</tr>`;
        }
    tab+="</table>"
    document.getElementById("graph").innerHTML=tab;
}
creatMap(obj);


