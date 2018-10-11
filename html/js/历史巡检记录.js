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
    
    document.getElementById("record3").setAttribute("style","display:block")   
}

function searchByEqu(){
    var record=document.getElementsByClassName("record")
    for(var i=0;i<record.length;i++){
        record[i].setAttribute("style","display:none")
    }
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
}
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
                 tab+=`<td><button onclick="chakan4()">查看详情</button></td>`;                 
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
                <thead> <th>巡检时间</th> <th>巡检路线</th> <th>巡检人</th> <th>详情</th></tr></thead>
                `
     for(var i=0;i<hang;i++)   
     {
         tab+="<tr>";
                 tab+=`<td>${ob[i].des}</td>`;
                 tab+=`<td>${ob[i].project}</td>`;
                 tab+=`<td>${ob[i].digest}</td>`;
                 tab+=`<td>${ob[i].describe}</td>`;
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
                <thead><tr><th>时间</th> <th>设备</th> <th>详情</th> <th>查看详情</th> </tr></thead>
            `
     for(var i=0;i<hang;i++)   
     {
         tab+="<tr>";
                 tab+=`<td>${ob[i].time2}</td>`;
                 tab+=`<td>${ob[i].project}</td>`;
                 tab+=`<td>${ob[i].describe}</td>`;
                 tab+=`<td><button onclick="chakan4()">${ob[i].breakMessage}</button></td>`;    
         tab+="</tr>";
     }           
     tab+="</table>"
     document.getElementById("graph4").innerHTML=tab;
 }
 creatGraph4(obj);

 var objMap={
    id:0,
    name:"线路1",          //路线名字
    spotnum:8,       //设备点数
    specified: true,                  //是否固定
    arrangeable:false,               //是否自由
    desc:"",                        //路线描述
    created_at:"",                 //路线创建时间
    updated_at:"",                //路线修改时间  //这条路线的各个点
    spots:[
        {
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:true,   //true 查过了   false 未查
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "0",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",   //当前值
                value:true,
                pass:false,
                },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: true,
            created_at: "",
            updated_at: "",
            checked:true,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",
                value:false,
                pass:true,
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50",
                    value:false,
                    pass:true,
                    
                    },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:true,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",
                value:true,
                pass:true,
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50",
                    value:true,
                    pass:false,
                    
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        data:"50",
                        value:false,     
                        pass:false,                        
                        updated_at: "巡检条目修改时间",
                        },]
        },{
            id: 1,
            name: "asd",
            desc: "asd",
            tmp: false,
            created_at: "",
            updated_at: "",
            checked:true,
            items: [{
                id:"1",
                content: "内容",
                unit: "位",
                itemtype: "1",
                st_min: "23",
                st_max: "45",
                al_min: "30",
                al_max: "40",
                created_at: "巡检条目创建时间",
                updated_at: "巡检条目修改时间",
                data:"50",
                pass:false,
                
                },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50",
                    pass:false,
                    
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        updated_at: "巡检条目修改时间",
                        data:"50",
                        pass:false,
                        
                        },{
                            id:"1",
                            content: "内容",
                            unit: "位",
                            itemtype: "1",
                            st_min: "23",
                            st_max: "45",
                            al_min: "30",
                            al_max: "40",
                            created_at: "巡检条目创建时间",
                            updated_at: "巡检条目修改时间",
                            data:"50",
                            pass:false,
                            
                            },{
                                id:"1",
                                content: "内容",
                                unit: "位",
                                itemtype: "1",
                                st_min: "23",
                                st_max: "45",
                                al_min: "30",
                                al_max: "40",
                                created_at: "巡检条目创建时间",
                                updated_at: "巡检条目修改时间",
                                data:"50",
                                pass:false,
                                
                                },{
                                    id:"1",
                                    content: "内容",
                                    unit: "位",
                                    itemtype: "1",
                                    st_min: "23",
                                    st_max: "45",
                                    al_min: "30",
                                    al_max: "40",
                                    created_at: "巡检条目创建时间",
                                    updated_at: "巡检条目修改时间",
                                    data:"50",
                                    pass:false,
                                    
                                    },{
                                        id:"1",
                                        content: "内容",
                                        unit: "位",
                                        itemtype: "1",
                                        st_min: "23",
                                        st_max: "45",
                                        al_min: "30",
                                        al_max: "40",
                                        created_at: "巡检条目创建时间",
                                        updated_at: "巡检条目修改时间",
                                        data:"50",
                                        pass:false,
                                        
                                        },{
                                            id:"1",
                                            content: "内容",
                                            unit: "位",
                                            itemtype: "1",
                                            st_min: "23",
                                            st_max: "45",
                                            al_min: "30",
                                            al_max: "40",
                                            created_at: "巡检条目创建时间",
                                            updated_at: "巡检条目修改时间",
                                            data:"50",
                                            pass:false,
                                            
                                            },{
                                                id:"1",
                                                content: "内容",
                                                unit: "位",
                                                itemtype: "1",
                                                st_min: "23",
                                                st_max: "45",
                                                al_min: "30",
                                                al_max: "40",
                                                created_at: "巡检条目创建时间",
                                                updated_at: "巡检条目修改时间",
                                                data:"50",
                                                pass:false,
                                                
                                                },{
                                                    id:"1",
                                                    content: "内容",
                                                    unit: "位",
                                                    itemtype: "1",
                                                    st_min: "23",
                                                    st_max: "45",
                                                    al_min: "30",
                                                    al_max: "40",
                                                    created_at: "巡检条目创建时间",
                                                    updated_at: "巡检条目修改时间",
                                                    data:"50",
                                                    pass:false,
                                                    
                                                    },{
                                                        id:"1",
                                                        content: "内容",
                                                        unit: "位",
                                                        itemtype: "1",
                                                        st_min: "23",
                                                        st_max: "45",
                                                        al_min: "30",
                                                        al_max: "40",
                                                        created_at: "巡检条目创建时间",
                                                        updated_at: "巡检条目修改时间",
                                                        data:"50",
                                                        pass:false,
                                                        
                                                        },{
                                                            id:"1",
                                                            content: "内容",
                                                            unit: "位",
                                                            itemtype: "1",
                                                            st_min: "23",
                                                            st_max: "45",
                                                            al_min: "30",
                                                            al_max: "40",
                                                            created_at: "巡检条目创建时间",
                                                            updated_at: "巡检条目修改时间",
                                                            data:"50",
                                                            pass:false,
                                                            
                                                            },{
                    id:"1",
                    content: "内容",
                    unit: "位",
                    itemtype: "1",
                    st_min: "23",
                    st_max: "45",
                    al_min: "30",
                    al_max: "40",
                    created_at: "巡检条目创建时间",
                    updated_at: "巡检条目修改时间",
                    data:"50",
                    value:false,
                    pass:true,
                    
                    },{
                        id:"1",
                        content: "内容",
                        unit: "位",
                        itemtype: "1",
                        st_min: "23",
                        st_max: "45",
                        al_min: "30",
                        al_max: "40",
                        created_at: "巡检条目创建时间",
                        updated_at: "巡检条目修改时间",
                        data:"50",
                        value:false,
                        pass:true,
                        
                        
                        },{
                            id:"1",
                            content: "内容",
                            unit: "位",
                            itemtype: "1",
                            st_min: "23",
                            st_max: "45",
                            al_min: "30",
                            al_max: "40",
                            created_at: "巡检条目创建时间",
                            data:"50",
                            value:false,
                            pass:false,
                            
                            updated_at: "巡检条目修改时间",
                            },{
                                id:"1",
                                content: "内容",
                                unit: "位",
                                itemtype: "1",
                                st_min: "23",
                                st_max: "45",
                                al_min: "30",
                                al_max: "40",
                                created_at: "巡检条目创建时间",
                                data:"50",
                                value:false,
                                pass:true,
                                
                                updated_at: "巡检条目修改时间",
                                },]
        }           
    ]
}
 
 function creatGraph5(ob){  //生成路线框图
    
     var lie=7;    
     var hang=ob.length;  
     var tab=`<table > 
                <thead><tr><th>巡检内容</th> <th>巡检值</th></tr></thead>
            `
     for(var i=0;i<hang;i++)   
        {
            tab+="<tr>";
                tab+=`<td>${ob[i].content}</td>`;

                if(ob[i].pass==true){
                    
                    if(ob[i].value==false){
                        tab+=`<td >通过</td>`;                    
                    }else{
                        tab+=`
                                <td>
                                    <div class="value value_left ">巡检值： ${ob[i].data}</div>
                                    <div class="value value_right">标准值：${ob[i].st_max} 警戒值：${ob[i].al_max}</div>
                                </td>
                            `        
                    }
                }else{
                    
                    if(ob[i].value==false){
                        tab+=`<td class="no_pass">未通过</td>`;                    
                    }else{
                        tab+=`
                                <td>
                                    <div class="value value_left no_pass">巡检值： ${ob[i].data}</div>
                                    <div class="value value_right">标准值：${ob[i].st_max} 警戒值：${ob[i].al_max}</div>
                                </td>
                            `
                    }
                    }   
            } 
     tab+="</table>"
     document.getElementById("graph5").innerHTML=tab;
 }
 creatGraph5(objMap.spots[3].items);
                                                                                                

function chakan4 (){
    document.getElementById("record1").setAttribute("style","display:none")
    document.getElementById("record4").setAttribute("style","display:none")
    document.getElementById("record5").setAttribute("style","display:block")

 }
