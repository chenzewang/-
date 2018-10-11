


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
                <thead><tr><th>NFC编号</th> <th>巡检区域名称</th> <th>mac</th> <th>删除</th> <th>激活</th> </tr></thead>
            `
    for(var i=0;i<hang;i++)   
    {
        if(ob[i].active==false){
            tab+=`<tr class="tr_noactive">`;
                tab+=`<td>${ob[i].num}</td>`;
                tab+=`<td>${ob[i].place}</td>`;
                tab+=`<td>${ob[i].tag}</td>`;
                tab+=`<td><button>删除</button></td>`;
                tab+=`<td><button class="but_noactive">激活</button></td>`;                    
            tab+="</tr>";
        }else{
            tab+=`<tr class="tr_active">`;
                tab+=`<td>${ob[i].num}</td>`;
                tab+=`<td>${ob[i].place}</td>`;
                tab+=`<td>${ob[i].tag}</td>`;
                tab+=`<td><button>删除</button></td>`;
                tab+=`<td><button class="but_active">取消激活</button></td>`;                    
        tab+="</tr>";
        }
        
    }           
    tab+="</table>"
    document.getElementById("graph1").innerHTML=tab;
}
creatMap(obj);

